import React, { useRef, useState } from "react";
import MainNavbar from "../Navbar/MainNavbar";
import { Checkbox } from "primereact/checkbox";

const GetDividerContent = (content) => {
	return (
		<div className="relative flex py-5 items-center">
			<div className="flex-grow border-t border-gray-400"></div>
			<span className="flex-shrink mx-4 text-gray-400">{content}</span>
			<div className="flex-grow border-t border-gray-400"></div>
		</div>
	);
};

const HeartRateForm = (props) => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const ageRef = useRef();
	const cplRef = useRef();
	const ejfRef = useRef();
	const pRef = useRef();
	const sctRef = useRef();
	const timeRef = useRef();
	const sslRef = useRef();

	const [gender, setGender] = useState("male");
	const [anaemia, setAnaemia] = useState(false);
	const [highBP, setHighBP] = useState(false);
	const [smoking, setSmoking] = useState(false);
	const [diabetes, setDiabetes] = useState(false);

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handleAnaemia = () => {
		setAnaemia(!anaemia);
	};

	const handleHighBP = () => {
		setHighBP(!highBP);
	};

	const handleSmoking = () => {
		setSmoking(!smoking);
	};

	const handleDiabetes = () => {
		setDiabetes(!diabetes);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const details = {
			firstName: firstNameRef.current.value,
			lastName: lastNameRef.current.value,
			age: ageRef.current.value,
			creatininePhosphokinase: cplRef.current.value,
			serumCreatinine: sctRef.current.value,
			ejectionFraction: ejfRef.current.value,
			platelets: pRef.current.value,
			serumSodium: sslRef.current.value,
			time: timeRef.current.value,
			gender: gender,
			anaemia: anaemia,
			smoking: smoking,
			highBP: highBP,
			diabetes: diabetes,
		};
		// console.log(details);
		props.onSend(details);
	};

	return (
		<div>
			<div className="flex items-center justify-center p-12">
				<div className="mx-auto w-full max-w-[700px]">
					<form onSubmit={submitHandler}>
						{GetDividerContent("Personal Details")}
						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="fName"
										className="mb-3 block text-base font-medium text-[#07074D]">
										First Name
									</label>
									<input
										type="text"
										name="fName"
										id="fName"
										placeholder="First Name"
										required
										// defaultValue="Rohith"
										ref={firstNameRef}
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="lName"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Last Name
									</label>
									<input
										type="text"
										name="lName"
										id="lName"
										placeholder="Last Name"
										required
										ref={lastNameRef}
										// defaultValue={"Boppey"}
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						{GetDividerContent("Numeric Details")}

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="guest"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Your age
									</label>
									<input
										type="number"
										name="guest"
										id="guest"
										placeholder="5-120 years old"
										min="5"
										max="120"
										ref={ageRef}
										// defaultValue="75"
										required
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="cpl"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Creatinine Phosphokinase (in mcg/L)
									</label>
									<input
										type="number"
										name="guest"
										id="cpl"
										placeholder="0 - 10000 mcg/L"
										min="0"
										max="10000"
										// defaultValue="582"
										required
										ref={cplRef}
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="ef"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Ejection Fraction (in %)
									</label>
									<input
										type="number"
										name="guest"
										id="ef"
										placeholder="0 - 100 %"
										min="0"
										max="100"
										required
										// defaultValue="20"
										ref={ejfRef}
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="scl"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Serum Creatinine Levels (mg/dL)
									</label>
									<input
										type="number"
										name="guest"
										id="scl"
										placeholder=" 0.2 - 10.0 mg/dL"
										min="0.0"
										max="10.0"
										step="0.01"
										// defaultValue="1.7"
										required
										ref={sctRef}
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="ssl"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Serum Sodium Levels (in mEq/L)
									</label>
									<input
										type="number"
										name="guest"
										id="ssl"
										placeholder="120 - 150 mEq/L"
										min="120"
										max="150"
										// defaultValue="130"
										required
										ref={sslRef}
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="time"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Days since last time checkup
									</label>
									<input
										type="number"
										name="guest"
										id="time"
										placeholder=" 1 - 365 days"
										min="1"
										max="365"
										// defaultValue="4"
										required
										ref={timeRef}
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label
										htmlFor="platelets"
										className="mb-3 block text-base font-medium text-[#07074D]">
										Platelets count
									</label>
									<input
										type="number"
										name="guest"
										id="platelets"
										placeholder="100000 - 550000"
										min="100000"
										max="550000"
										// defaultValue="265000"
										required
										ref={pRef}
										className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
						</div>

						{GetDividerContent("Other Details")}

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">
										Gender
									</label>
									<div className="flex items-center space-x-6">
										<div className="flex items-center">
											<input
												type="radio"
												name="gender"
												id="radioButton1"
												value="male"
												onChange={handleGenderChange}
												className="h-5 w-5"
												checked={gender == "male"}
											/>
											<label
												htmlFor="radioButton1"
												className="pl-3 text-base font-medium text-[#07074D]">
												Male
											</label>
										</div>
										<div className="flex items-center">
											<input
												type="radio"
												name="gender"
												id="radioButton2"
												className="h-5 w-5"
												value="female"
												checked={gender == "female"}
												onChange={handleGenderChange}
											/>
											<label
												htmlFor="radioButton2"
												className="pl-3 text-base font-medium text-[#07074D]">
												Female
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">
										Do you have Anaemia?
									</label>

									<div className="flex items-center mb-4">
										<input
											id="anaemia"
											type="checkbox"
											value={anaemia}
											onChange={handleAnaemia}
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="anaemia"
											className="ms-2 text-sm text-[#07074D]">
											Yes
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">
										Do you have the habit to smoke?
									</label>

									<div className="flex items-center mb-4">
										<input
											id="smoking"
											type="checkbox"
											value={smoking}
											onChange={handleSmoking}
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="smoking"
											className="ms-2 text-sm text-[#07074D]">
											Yes
										</label>
									</div>
								</div>
							</div>
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">
										Do you have High Blood Pressure
										currently / in the past? (130-139/80-89
										mmHg)
									</label>

									<div className="flex items-center mb-4">
										<input
											id="bp"
											type="checkbox"
											value={highBP}
											onChange={handleHighBP}
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="bp"
											className="ms-2 text-sm text-[#07074D]">
											Yes
										</label>
									</div>
								</div>
							</div>
						</div>

						<div className="-mx-3 flex flex-wrap">
							<div className="w-full px-3 sm:w-1/2">
								<div className="mb-5">
									<label className="mb-3 block text-base font-medium text-[#07074D]">
										Do you have diabetes?
									</label>

									<div className="flex items-center mb-4">
										<input
											id="diabetes"
											type="checkbox"
											value={diabetes}
											onChange={handleDiabetes}
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										/>
										<label
											htmlFor="diabetes"
											className="ms-2 text-sm text-[#07074D]">
											Yes
										</label>
									</div>
								</div>
							</div>
						</div>

						<div>
							<button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default HeartRateForm;
