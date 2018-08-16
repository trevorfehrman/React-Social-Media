import React from "react";
import { Route } from "react-router-dom";
import PostContainer from "./Components/PostContainer";
import Header from "./Components/Header";
import PostFeed from "./Components/PostFeed";
import AddPost from "./Components/AddPost";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={AddPost} />
			<Route exact path="/" component={PostFeed} />
			<Route path="/posts/:id" component={PostContainer} />
		</div>
	);
}

export default App;
