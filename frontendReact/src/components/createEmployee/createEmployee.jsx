import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "./CreateEmployee.module.scss";
import defaultAvatar from "../../assets/img/avatar/H2G2-Grok-only.svg";
import stateData from "../../assets/data/states.json";
import countryData from "../../assets/data/country.json";

import Dropdown from "../dropdown/dropdown";

const CreateEmployee = ({ onAddEmployee }) => {
	const [employee, setEmployee] = useState({
		avatar: "",
		firstName: "",
		lastName: "",
		birthday: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		country: "",
		department: "",
		function: "",
		startWork: "",
		endWork: "",
	});

	const [showModal, setShowModal] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmployee((prev) => ({ ...prev, [name]: value }));
	};

	const handleStateChange = (value) => {
		setEmployee((prev) => ({ ...prev, state: value }));
	};
	const handleCountryChange = (value) => {
		setEmployee((prev) => ({ ...prev, country: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddEmployee(employee);
		setEmployee({
			avatar: "",
			firstName: "",
			lastName: "",
			birthday: "",
			street: "",
			city: "",
			state: "",
			zipCode: "",
			country: "",
			department: "",
			function: "",
			startWork: "",
			endWork: "",
		});
	};

	const handleDelete = () => {
		setShowModal(true);
	};

	const confirmDelete = () => {
		// Logic to delete the employee
		setShowModal(false);
	};

	const cancelDelete = () => {
		setShowModal(false);
	};

	useEffect(() => {
		if (stateData.length > 0) {
			setEmployee((prev) => ({ ...prev, state: stateData[0].abbreviation }));
		}
		if (countryData.length > 0) {
			setEmployee((prev) => ({
				...prev,
				country: countryData[0].abbreviation,
			}));
		}
	}, []);

	return (
		<div className={styled.createEmployee}>
			<h2>Modifier Employés</h2>
			<form onSubmit={handleSubmit} className={styled.form}>
				<div className={styled.avatarSection}>
					<img
						src={employee.avatar || defaultAvatar}
						alt="Employee Avatar"
						className={styled.avatar}
					/>
					<input
						type="text"
						name="avatar"
						value={employee.avatar}
						onChange={handleChange}
						placeholder="Avatar URL"
					/>
				</div>

				<div className={styled.generalInfos}>
					<h3>General Information</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>First Name</label>
							<input
								type="text"
								name="firstName"
								value={employee.firstName}
								onChange={handleChange}
								placeholder="John"
							/>
						</div>

						<div>
							<label>Last Name</label>
							<input
								type="text"
								name="lastName"
								value={employee.lastName}
								onChange={handleChange}
								placeholder="Doe"
							/>
						</div>

						<div>
							<label>Birthday</label>
							<input
								type="date"
								name="birthday"
								value={employee.birthday}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className={styled.addressInfo}>
					<h3>Address Information</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>Street</label>
							<input
								type="text"
								name="street"
								value={employee.street}
								onChange={handleChange}
								placeholder="123 Main St"
							/>
						</div>

						<div>
							<label>City</label>
							<input
								type="text"
								name="city"
								value={employee.city}
								onChange={handleChange}
								placeholder="New York"
							/>
						</div>

						<div>
							<label>State</label>
							<Dropdown
								name="state"
								onChangeDropdown={handleStateChange}
								optionsList={stateData}
								defaultValue={employee.state}
							/>
						</div>

						<div>
							<label>Zip Code</label>
							<input
								type="text"
								name="zipCode"
								value={employee.zipCode}
								onChange={handleChange}
								placeholder="10001"
							/>
						</div>

						<div>
							<label>Country</label>
							<Dropdown
								name="country"
								onChangeDropdown={handleCountryChange}
								optionsList={countryData}
								defaultValue={employee.country}
							/>
						</div>
					</div>
				</div>

				<div className={styled.workInfo}>
					<h3>Work Information</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>Department</label>
							<input
								type="text"
								name="department"
								value={employee.department}
								onChange={handleChange}
								placeholder="Engineering"
							/>
						</div>

						<div>
							<label>Function</label>
							<input
								type="text"
								name="function"
								value={employee.function}
								onChange={handleChange}
								placeholder="Software Engineer"
							/>
						</div>

						<div>
							<label>Start Work</label>
							<input
								type="date"
								name="startWork"
								value={employee.startWork}
								onChange={handleChange}
							/>
						</div>

						<div>
							<label>End Work</label>
							<input
								type="date"
								name="endWork"
								value={employee.endWork}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>

				<div className={styled.btn}>
					<button type="submit" className={styled.btn__create}>
						Ajout Employés
					</button>
					<button type="button" className={styled.btn__modif}>
						Valider
					</button>
					<button type="button" className={styled.btn__cancel}>
						Annuler
					</button>
					<button
						type="button"
						className={styled.btn__supp}
						onClick={handleDelete}
					>
						⚠️ Supprimer Employés ⚠️
					</button>
				</div>

				{showModal && (
					<div className={styled.confirmationModal}>
						<p>Are you sure you want to delete this employee?</p>
						<button onClick={confirmDelete}>Yes</button>
						<button onClick={cancelDelete}>No</button>
					</div>
				)}
			</form>
		</div>
	);
};

CreateEmployee.propTypes = {
	onAddEmployee: PropTypes.func.isRequired,
};

export default CreateEmployee;
