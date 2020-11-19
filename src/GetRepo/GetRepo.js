import React from 'react'
import './GetRepo.css'

const GetRepo = ({handleSubmit, error}) => (
	<main className="getRepoCont">
		<form onSubmit={handleSubmit} >
			<div>
				<input type="text" name="repo" placeholder="Github username"/>
				<input type="submit" value=">" className="valid"/>
			</div>
			<div>
				<label htmlFor="owning">Only show owned repositories</label>
				<input type="checkbox" name="owning"/>
			</div>
		</form>
		{error && <span>This username couldn't be found</span>}
	</main>
)

export default GetRepo