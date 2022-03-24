import { Provider } from "react-redux";
import "./App.css";
import UserListContainer from "./componenet/UserListContainer/UserListContainer.jsx";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
		<div className="UserListContainer">
			<UserListContainer />
		</div>
		</Provider>
	);
}

export default App;
