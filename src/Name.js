import React from 'react';

export default function Names({match}) {
	const owner = match.url.split('/').reverse()[0];

	if (owner === 'sina') {
		var SinaSection = (
			<div className="sina">
				<h1 style={{color: 'hotpink'}}>You entered SinaSection.</h1>
			</div>
		);
	} else {
		SinaSection = <div className="sina">sina isn't entered</div>;
	}

	return (
		<div>
			<h1>Name</h1>
			{SinaSection}
		</div>
	);
}
