import React from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	// useHistory,
	// useLocation,
	// useParams,
	// useRouteMatch
} from 'react-router-dom';

function Home() {
	return <h1>HOME</h1>;
}

function SSS({location}) {
	return <div>{location.pathname}</div>;
}

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
				{console.log(match.url)}
			</div>
		);
	} else {
		return <h1>Null</h1>;
	}
}

function Topics({match}) {
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

			<Route exact path={`${match.url}/:title`} component={TopicName} />
			<Route exact path={`${match.url}/:title/:name`} component={SSS} />
		</div>
	);
}

class App extends React.Component {
	render() {
		return (
			<Router>
				<div style={{width: 1000, margin: '0 auto'}}>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>
				</div>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/topics" component={Topics} />
				</Switch>
			</Router>
		);
	}
}

export default App;
