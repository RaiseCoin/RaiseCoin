import React from "react";
import CustomInput from "../profile_page_comp/CustomInput";

const MyProfile = () => {
	return (
		<div className="flex flex-col">
			<p className="font-bold text-2xl text-green-600 mb-5">Profile Overview</p>

			<form>
				<div className="grid gap-6 mb-6 md:grid-cols-2">
					<CustomInput
						label={"First name"}
						id={"first_name"}
						placeholder={"Jitesh"}
						type={"text"}
					/>
					<CustomInput
						label={"Last name"}
						id={"last_name"}
						placeholder={"Puri"}
						type={"text"}
					/>
					<CustomInput
						label={"Email address"}
						id={"email"}
						placeholder={"jitesh.puri@gmail.com"}
						type={"email"}
					/>
					<CustomInput
						label={"Phone number"}
						id={"phone"}
						placeholder={"+91-8788818596"}
						pattern={"[0-9]{3}-[0-9]{2}-[0-9]{4}"}
						type={"tel"}
					/>
				</div>
			</form>
		</div>
	);
};

export default MyProfile;
