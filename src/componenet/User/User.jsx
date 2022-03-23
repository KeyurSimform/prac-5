import React from "react";
import "../User/User.css";
const User = (props) => {
	return (
		<div className="UserDetails">
			<div className="NameColumn">
				<img
					className="Avatar"
					src={props.avatar}
					alt=""
					height="50px"
					border="1px"
				/>
				<div className="PersonalDetails">
					<div className="name">
						 {props.name}
					</div>
					<div className="email">
						{props.email}
					</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default User;
