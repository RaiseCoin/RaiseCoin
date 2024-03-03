import React from "react";
import CustomInput from "./CustomInput";

const Dashboard = () => {
	return (
		<div className="flex flex-col">
			<p className="font-bold text-2xl text-green-600 mb-5">Profile Overview</p>

			<form>
				<div className="grid gap-6 mb-6 md:grid-cols-2">
					<CustomInput
						label={"First name"}
						id={"first_name"}
						placeholder={"John"}
						type={"text"}
					/>
					<CustomInput
						label={"Last name"}
						id={"last_name"}
						placeholder={"Doe"}
						type={"text"}
					/>
					<CustomInput
						label={"Email address"}
						id={"email"}
						placeholder={"john.doe@example.com"}
						type={"email"}
					/>
					<CustomInput
						label={"Phone number"}
						id={"phone"}
						placeholder={"123-45-6789"}
						pattern={"[0-9]{3}-[0-9]{2}-[0-9]{4}"}
						type={"tel"}
					/>
				</div>
			</form>
		</div>
	);
};

export default Dashboard;
