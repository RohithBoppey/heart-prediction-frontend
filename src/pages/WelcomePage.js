import React from "react";
import MainNavbar from "../components/Navbar/MainNavbar";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
	const navigate = useNavigate();

	const handleChange = () => {
		navigate("/check-heart-status");
	};

	return (
		<div>
			<MainNavbar />
			<div className="flex items-center justify-center mt-10 mb-10">
				<div className="w-3/5 bg-white p-8 rounded-lg shadow-lg text-center">
					<h1 className="text-4xl font-bold text-blue-500 mb-4">
						Early Prediction of Heart Failure
					</h1>

					<p className="text-gray-600 mb-6">
						<u>Welcome To Heart Predictor Online! </u> 🌍
						<br />
						We recognise how vital your cardiovascular health is.
						With the use of multiple parameters, our machine
						learning algorithm can help you estimate the probability
						of early heart failure. <br />
						<br />
						📊{" "}
						<span className="font-bold underline">
							How It Operates:{" "}
						</span>
						&nbsp; Just provide the necessary parameters, like age,
						anaemia and then allow our sophisticated algorithm to
						examine the information. Our algorithm can provide
						precise predictions since it has been painstakingly
						trained on a huge dataset. <br />
						<br />
					</p>

					<div className="mb-4t">
						<p className="text-gray-700 mb-2">
							Before using the application, please ensure you have
							the following values:
						</p>
						<ul className="list-disc list-inside text">
							<div className="flex">
								<div className="w-1/2 p-4">
									<li className="text-gray-600">Age</li>
									<li className="text-gray-600">
										Creatinine Phosphokinase
									</li>
									<li className="text-gray-600">
										Ejection Fraction (%)
									</li>
								</div>
								<div className="w-1/2 p-4">
									<li className="text-gray-600">
										Serum Creatinine Levels (mg/dL)
									</li>
									<li className="text-gray-600">
										Serum Sodium Levels (in mEq/L)
									</li>
									<li className="text-gray-600">
										Last time since heart checkup
									</li>
								</div>
							</div>
						</ul>
					</div>

					<button
						className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
						onClick={handleChange}>
						Enter
					</button>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
