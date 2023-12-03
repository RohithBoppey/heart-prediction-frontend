import React, { useEffect } from "react";
import MainNavbar from "../components/Navbar/MainNavbar";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ResultPage = (props) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (Object.keys(props.userDetails).length == 0) {
			navigate("/");
		}
	}, []);

	var fixedString = props.response.replace(/\\n/g, "\n");

	const MyComponent = ({ htmlString }) => {
		return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
	};

	const htmlString = `
<h2>Heart Condition Evaluation Report for Karthik D</h2> <p>Dear Karthik,</p> <p>Based on the evaluation of your health report, I am here to provide you with a detailed analysis of your heart condition.</p> <p>The machine learning model predicts that there is a <strong>high probability of heart failure</strong> with a confidence level of <strong>88.98%</strong>.</p> <p>Let's dive into the details of your health report:</p> <ul> <li><strong>Age:</strong> You are 58 years old. Age is an important factor in assessing heart health, as the risk of heart diseases tends to increase with age.</li> <li><strong>Anaemia:</strong> The report indicates that you have anaemia. Anaemia is a condition where the body lacks enough healthy red blood cells to carry adequate oxygen to the body's tissues. It can put additional strain on the heart.</li> <li><strong>Creatinine Phosphokinase Levels:</strong> Your creatinine phosphokinase levels are within the normal range. Creatinine phosphokinase is an enzyme found in the heart, brain, and skeletal muscle. Elevated levels may indicate heart muscle damage.</li> <li><strong>Ejection Fraction:</strong> Your ejection fraction is 25%. Ejection fraction measures the percentage of blood pumped out of the heart with each contraction. A lower ejection fraction can indicate a weakened heart.</li> <li><strong>High Blood Pressure:</strong> You do not have high blood pressure. High blood pressure is a major risk factor for heart diseases.</li> <li><strong>Platelet Count:</strong> Your platelet count is within the normal range. Platelets are blood cells that help with clotting. Abnormal platelet count can affect blood flow and increase the risk of heart diseases.</li> <li><strong>Serum Creatinine Levels:</strong> Your serum creatinine levels are within the normal range. Serum creatinine is a waste product produced by the muscles. Elevated levels may indicate kidney problems, which can impact heart health.</li> <li><strong>Serum Sodium Levels:</strong> Your serum sodium levels are within the normal range. Sodium is an electrolyte that helps maintain fluid balance in the body. Imbalances can affect heart function.</li> <li><strong>Gender:</strong> You are male. Gender can play a role in heart health, as men tend to have a higher risk of heart diseases compared to women.</li> <li><strong>Diabetes:</strong> You do not have diabetes. Diabetes is a chronic condition that can increase the risk of heart diseases.</li> <li><strong>Smoking:</strong> You are a smoker. Smoking is a major risk factor for heart diseases, as it damages blood vessels and reduces oxygen supply to the heart.</li> <li><strong>Number of days since last checking:</strong> It has been 69 days since your last check-up. Regular check-ups are crucial for monitoring heart health and detecting any potential issues early on.</li> </ul> <p>Based on the above evaluation, it is important to take your heart health seriously and make necessary lifestyle changes to reduce the risk of heart failure. Here are some personalized tips and precautions for you:</p> <ul> <li><strong>Quit Smoking:</strong> Smoking is extremely harmful to your heart. I strongly recommend quitting smoking as soon as possible. Seek support from healthcare professionals or support groups to help you in this journey.</li> <li><strong>Manage Anaemia:</strong> Anaemia can put additional strain on your heart. Consult with a healthcare professional to determine the underlying cause of your anaemia and develop a treatment plan to manage it effectively.</li> <li><strong>Exercise Regularly:</strong> Engaging in regular physical activity can improve heart health. Consult with a healthcare professional to determine the appropriate exercise routine for you.</li> <li><strong>Follow a Heart-Healthy Diet:</strong> Adopting a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help reduce the risk of heart diseases. Limit your intake of processed foods, saturated fats, and added sugars.</li> <li><strong>Maintain a Healthy Weight:</strong> If you are overweight or obese, losing weight can significantly improve heart health. Consult with a healthcare professional to determine a healthy weight loss plan.</li> <li><strong>Manage Stress:</strong> Chronic stress can negatively impact heart health. Find healthy ways to manage stress, such as practicing relaxation techniques, engaging in hobbies, or seeking support from a therapist.</li> </ul> <p>While the machine learning model provides valuable insights, it is important to remember that it is not a substitute for professional medical advice. I strongly recommend seeking a second opinion from a qualified healthcare professional who can further evaluate your heart condition and provide personalized recommendations.</p> <p>Take care of your heart, Karthik, and prioritize your health. If you have any further questions or concerns, feel free to reach out.</p> <p>Best regards,</p> <p>Your AI Heart Expert Model</p>    
    
    `;

	return (
		<div>
			<MainNavbar />
			<div className="flex items-center justify-center mt-10 mb-10">
				<div className="w-3/5 bg-white p-8 rounded-lg shadow-lg text-center">
					<h1 className="text-4xl font-bold text-blue-500 mb-4 pb-5">
						Report of {props.userDetails.firstName} 's Heart
					</h1>

					<div className="text-left">
						<MyComponent htmlString={props.response} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultPage;
