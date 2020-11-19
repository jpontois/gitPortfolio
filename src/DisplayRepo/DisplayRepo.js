import React from 'react'
import RepoCard from '../RepoCard/RepoCard'
import './DisplayRepo.css'

const DisplayRepo = ({user, data}) => (
	<main className="displayCont">
		<aside>
			<img src={user.avatar_url} alt={user.login + '_picture'} />
			<h1>{user.name}</h1>
			<h2><a href={user.html_url} target="_blank" >@{user.login}</a></h2>
		</aside>
		<section>
			<h1>Projets</h1>
			<div className="sectionCont">
				{
					data.length ?
					data.map(ele => (
						<RepoCard
							key={ele.id}
							data={ele}
						/>
					))
					:
					<span>There is no project associated with this user</span>
				}
			</div>
		</section>
	</main>
)

export default DisplayRepo