import React from "react";
import UserList from "../DummyData/DummyData";
import User from "../User/User";
import "../UserDataContainer/UserDataContainer.css";
import UserDataHeader from "../UserDataHeader/UserDataHeader";

const UserDataContainer = () => {
	return (
		<div className="UserDataContainer">
			<UserDataHeader />
			{UserList.map((user) => (
				<User
					key={user.id}
					id={user.id}
					avatar={user.avatar}
					name={`${user.first_name} ${user.last_name}`}
					email={user.email}
				/>
			))}
			<User />
		</div>
	);
};

export default UserDataContainer;
