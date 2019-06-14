import React from 'react';

const Card = (props) => {
	return (
		<div className = 'bg-light-green dib ma2 pa3 br3 grow tc shadow-5' >
			<img  alt='robot' src={`https://robohash.org/${props.id}?200*200`}/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;