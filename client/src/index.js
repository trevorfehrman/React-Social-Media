import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(
	rootReducer,
	{
		posts: [
			{
				id: 0,
				text: "Lorem ipsum dolor sit amet",
				liked: false
			}
		],
		comments: [
			{
				id: 0,
				postId: 0,
				comment: "Comment ipsum",
			}
		],
	},
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
