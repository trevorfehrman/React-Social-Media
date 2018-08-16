import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Link to="/">
				<h1>React Social Media</h1>
			</Link>
			<i>The number one social media for rigging elections</i>
		</div>
	);
};

export default Header;
