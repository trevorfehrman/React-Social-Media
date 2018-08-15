import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
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
				comment: "Comment ipsum"
			}
		],
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
