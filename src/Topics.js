import React from 'react';
import {Link, Route} from 'react-router-dom';

import Name from './Name';

function TopicName({match, location}) {
	if (location.pathname === '/topics/user') {
		return (
			<div>
				<div>TOPIC NAME</div>
				{location.pathname}
				{[{name: 'sina'}, {name: 'tom'}, {name: 'mike'}].map((item, index) => {
					return (
						<Link key={index} to={`${match.url}/${item.name}`}>
							<div>{item.name}</div>
						</Link>
					);
				})}
			</div>
		);
	} else {
		return <h1>Null</h1>;
	}
}

export default function Topics({match}) {
	return (
		<div>
			<h1>Topics</h1>
			{[{title: 'shop'}, {title: 'product'}, {title: 'user'}].map(
				(item, index) => (
					<Link key={index} to={`${match.url}/${item.title}`}>
						<div>{item.title}</div>
					</Link>
				),
			)}

			<Route exact path={`${match.url}/:topics`} component={TopicName} />
			<Route exact path={`${match.url}/:topics/:name`} component={Name} />
		</div>
	);
}
