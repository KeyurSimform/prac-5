import React from "react";
import UserList from "../DummyData/DummyData";
import User from "../User/User";
import "../UserDataContainer/UserDataContainer.css";
import UserDataHeader from "../UserDataHeader/UserDataHeader";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
import { useSelector } from "react-redux";


// Here the UserDataContainer is the componenet which hold all the main component of the app 

// User componenet will render the users in the list of user

// UserProfileCard will display the card on hovering the user

// here the use selector hook will allow to use the state which is dispatched from any componenet.
const UserDataContainer = () => {

	const UserCard = useSelector(state => state.UserProfileCard.User)
	return (
		<div className="UserDataContainer">
			<UserDataHeader />
			{UserList.map((user) => (
				<User
					key={user.id}
					id={user.id}
					avatar={user.avatar}
					fname={`${user.first_name}`}
					lname={`${user.last_name}`}
					email={user.email}
				/>
			))}
			{UserCard && <UserProfileCard name = {UserCard.name} avatar = {UserCard.avatar} email={UserCard.email}/>}
		</div>
	);
};

export default UserDataContainer;
