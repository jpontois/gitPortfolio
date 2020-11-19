import React from 'react'
import DisplayRepo from '../DisplayRepo/DisplayRepo'
import GetRepo from '../GetRepo/GetRepo'

export default class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			provided: false,
			repoError: false,
			user: false,
			repoData: null,
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

    async handleSubmit(e) {
        e.preventDefault()
        const form = new FormData(e.target)
        const repo = form.get('repo')
        const applyFilter = form.get('applyFilter')
		const user = await this.getUser(repo)
		if (user) {
			const res = await this.getData(repo)
			const data = applyFilter ? res.filter(ele => !ele.fork) : res
			this.setState({
				provided: true,
				repoError: false,
				repoData: data,
				user: user
			})
		} else {
			this.setState({repoError: true})
		}
    }

	async getUser (repo) {
		const res = await fetch(`https://api.github.com/users/${repo}`)
		return res.status === 404 ? false : res.json()
	}

	async getData (repo) {
		const res = await fetch(`https://api.github.com/users/${repo}/repos`)
		return res.json()
	}

	render() {
		return (
			<div>
				{
					!this.state.provided ?
					<GetRepo handleSubmit={this.handleSubmit} error={this.state.repoError} /> :
					<DisplayRepo user={this.state.user} data={this.state.repoData} />
				}
			</div>
		)
	}
}
