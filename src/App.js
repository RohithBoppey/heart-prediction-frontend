import React, { useRef, useState } from "react";
import { Route, Routes, useAsyncValue, useNavigate } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import CheckHeart from "./pages/CheckHeart";

import axios from "axios";

import { Toast } from "primereact/toast";
import ResultPage from "./pages/ResultPage";
import { ProgressSpinner } from "primereact/progressspinner";

function App() {
	const toast = useRef(null);

	const [finalOutputAI, setFinalOutputAI] = useState("");
	const [userDetails, setUserDetails] = useState({});

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const SentToServer = () => {
		toast.current.show({
			severity: "info",
			summary: "Info",
			detail: "Successfully sent to server, please wait until server responds.",
		});
	};

	const PredictionDone = () => {
		toast.current.show({
			severity: "success",
			summary: "Info",
			detail: "Prediction done, waiting for AI Generated response",
		});
	};

	const handlePredictedResponse = async (details) => {
		const response = await axios.post(
			"http://localhost:5000/get_ai_response",
			details
		);
		console.log(response);
		setUserDetails(details.user_details);
		setFinalOutputAI(response.data.generated_text);

		navigate("/result");
	};

	const sendResponseToBackend = async (details) => {
		
        setLoading(true);

        console.log(details);

		const {
			firstName,
			lastName,
			age,
			anaemia,
			creatininePhosphokinase,
			diabetes,
			ejectionFraction,
			gender,
			highBP,
			platelets,
			serumCreatinine,
			serumSodium,
			smoking,
			time,
		} = details;

		const genderNum = gender == "male" ? 1 : 0;

		const modifiedDetails = {
			personal_details: { firstName, lastName },
			stats: {
				age,
				anaemia,
				creatinine_phosphokinase: creatininePhosphokinase,
				ejection_fraction: ejectionFraction,
				high_blood_pressure: highBP,
				platelets,
				serum_creatinine: serumCreatinine,
				serum_sodium: serumSodium,
				sex: genderNum,
				diabetes,
				smoking,
				time,
			},
		};

		SentToServer();

		const response = await axios.post(
			"http://localhost:5000/predict",
			modifiedDetails
		);

		console.log(response);
        PredictionDone();

		const prediction_result = {
			prediction: response["data"]["prediction"],
			probability: response["data"]["probability"],
		};

		await handlePredictedResponse({
			user_details: modifiedDetails.personal_details,
			stats: modifiedDetails.stats,
			prediction_result,
		});
        
        setLoading(false);
	};

	return (
		<div>
			{loading && (
				<div
					id="loading-screen"
					class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
					<ProgressSpinner />
				</div>
			)}

			<Toast ref={toast} />
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route
					path="/check-heart-status"
					element={<CheckHeart onSend={sendResponseToBackend} />}
				/>
				<Route
					path="/result"
					element={
						<ResultPage
							response={finalOutputAI}
							userDetails={userDetails}
						/>
					}></Route>
			</Routes>
		</div>
	);
}

export default App;
