import './RepoCard.css'

const RepoCard = ({data}) => (
	<a className="card" href={data.html_url} target="_blank" >		
		<article>
			<h1>{data.name}</h1>
			<div>
				<span>
					<i className="fas fa-code"></i>
					{data.language}
				</span>
				<span>
					<i className="fas fa-star"></i>
					{data.stargazers_count}
				</span>
				<span>
					<i className="fas fa-code-branch"></i>
					{data.forks}
				</span>
			</div>
		</article>
	</a>
)

export default RepoCard