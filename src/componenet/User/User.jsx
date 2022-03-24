import React from "react";
import { Lock,Trash2 } from "react-feather";
import "../User/User.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/UserProfileCardSlice";


const User = (props) => {

	// This will be the const to useDispatch Methd of React Redux
	const dispatch = useDispatch();

// This Function will handle the onMouseEnter Event 
	const MouseEntereHandler = () =>{
		dispatch(cardActions.setUser({ name: props.fname+" "+props.lname, email:props.email, avatar:props.avatar }));
	}

	const MouseLeaveHandler = () =>{
		dispatch(cardActions.removeUser())
	}

	return (
		<div className="UserDetails">
			<div onMouseEnter={MouseEntereHandler} className="NameColumn">
				<img className="Avatar" src={props.avatar} alt="" />
				<div className="PersonalDetails">
					<div className="name">{props.fname + " " + props.lname}</div>
					<div className="email">{props.email}</div>
				</div>
			</div>
			<div className="Status">
				{props.id === 1 && <div className="OwnerUser">Active</div>}
				{props.id > 1 && (
					<div>
						<select name="Status">
							<option value="Active">Active</option>
							<option value="Inactive">Inactive</option>
						</select>
					</div>
				)}
			</div>
			<div className="Access">
				{props.id === 1 && <div className="OwnerAccess">Owner</div>}
				{props.id > 1 && (
					<div>
						<select name="Access">
							<option value="Manager">Manager</option>
							<option value="Read">Read</option>
							<option value="Write">Write</option>
						</select>
					</div>
				)}
			</div>
			<div className="AccessIcon">
				{props.id === 1 && <Lock/>}
				{props.id > 1 && <Trash2 color="red"/> }
			</div>
		</div>
	);
};

export default User;
