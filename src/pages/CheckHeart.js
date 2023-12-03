import React from "react";
import MainNavbar from "../components/Navbar/MainNavbar";
import HeartRateForm from "../components/HeartRateForm/HeartRateForm";

const CheckHeart = (props) => {
	return (
		<div>
			<MainNavbar />
			<HeartRateForm onSend={props.onSend} />
		</div>
	);
};

export default CheckHeart;
