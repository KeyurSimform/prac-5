import React from "react";
import User from "../User/User";
import "../UserDataContainer/UserDataContainer.css";
import UserDataHeader from "../UserDataHeader/UserDataHeader";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchAsyncUser  from "../../store/UserSlice";

// Here the UserDataContainer is the componenet which hold all the main component of the app

// User componenet will render the users in the list of user

// UserProfileCard will display the card on hovering the user

// here the use selector hook will allow to use the state which is dispatched from any componenet.

const UserDataContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {

		dispatch(fetchAsyncUser);
		// const fetchUser = async () => {
			// const response = await UserApi.get().catch((err) => {
			// 	console.log("Error: ", err);
			// });
			// // console.log("Api response: ", response.data);
			// dispatch(userActions.addUser(response.data));
		// };
		// fetchUser();
	}, [dispatch]);

	const UserCard = useSelector((state) => state.UserProfileCard.User);

	const trial = useSelector((state) => state.newUser.newUser);


	return (
		<div className="UserDataContainer">
			<UserDataHeader />
			{trial.hasOwnProperty("data") &&
				trial.data.map((user) => (
					<User
						key={user.id}
						id={user.id}
						avatar={user.avatar}
						fname={`${user.first_name}`}
						lname={`${user.last_name}`}
						email={user.email}
					/>
				))}
			{UserCard && (
				<UserProfileCard
					name={UserCard.name}
					avatar={UserCard.avatar}
					email={UserCard.email}
				/>
			)}
		</div>
	);
};

export default UserDataContainer;
