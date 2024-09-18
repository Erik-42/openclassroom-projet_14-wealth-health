import { useState, useEffect, useRef } from "react";
import styled from "./createEmployee.module.scss";
import defaultAvatar from "../../assets/img/avatar/H2G2-Grok-only.svg";
import stateData from "../../assets/data/states.json";
import countryData from "../../assets/data/country.json";
import jobData from "../../assets/data/job.json";
import departmentData from "../../assets/data/department.json";
import Dropdown from "../dropdown/dropdown";
import { useSelector } from "react-redux";
import EmployeeInfo from "../employeeInfo/employeeInfo";

// Fonction pour gérer le changement de fichier
function handleFileChange(e, setEmployee) {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onloadend = () => {
			setEmployee((prev) => ({ ...prev, avatar: reader.result }));
		};
		reader.readAsDataURL(file);
	}
}

// Function to handle form submission
function handleSubmit(
	e,
	employee,
	onAddEmployee,
	setEmployee,
	setShowConfirmationModal
) {
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
	setShowConfirmationModal(true);
}

// Fonction pour gérer les changements de champ de saisie
function handleChange(e, setEmployee) {
	const { name, value } = e.target;
	setEmployee((prev) => ({ ...prev, [name]: value }));
}

// Fonction pour gérer le changement d'état
function handleStateChange(value, setEmployee) {
	setEmployee((prev) => ({ ...prev, state: value }));
}

// Fonction pour gérer le changement de pays
function handleCountryChange(value, setEmployee) {
	setEmployee((prev) => ({ ...prev, country: value }));
}

// Fonction pour gérer le changement de department
function handleDepartmentChange(value, setEmployee) {
	setEmployee((prev) => ({ ...prev, department: value }));
}

// Fonction pour gérer le changement de job
function handleJobChange(value, setEmployee) {
	setEmployee((prev) => ({ ...prev, job: value }));
}

// Fonction pour gérer le changement dropdown
function handleDropdownChange(value, name, setEmployee) {
	setEmployee((prev) => ({ ...prev, [name]: value }));
}

// Fonction pour réinitialiser tous les champs
function handleReset(setEmployee) {
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
}

// Fonction pour gérer l'affichage de la modal de confirmation
function handleDelete(setShowModal) {
	setShowModal(true);
}

// Fonction pour confirmer l'archivage
function confirmDelete(setShowModal) {
	setShowModal(false);
}

// Fonction pour annuler la suppression
function cancelDelete(setShowModal) {
	setShowModal(false);
}

export default function CreateEmployee({ onAddEmployee = () => {} }) {
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
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const [showEmployeeInfo, setShowEmployeeInfo] = useState(false);
	const fileInputRef = useRef(null);
	const selectedEmployee = useSelector(
		(state) => state.employee.selectedEmployee
	);

	useEffect(() => {
		if (stateData.length > 0)
			setEmployee((prev) => ({ ...prev, state: stateData[0].abbreviation }));
		if (countryData.length > 0)
			setEmployee((prev) => ({
				...prev,
				country: countryData[0].abbreviation,
			}));
	}, []);

	useEffect(() => {
		setEmployee((prevEmployee) => ({
			...prevEmployee,
			avatar: "",
			firstName: "",
			lastName: "",
			birthday: "",
			street: "",
			city: "",
			state: stateData[0]?.abbreviation || "",
			zipCode: "",
			country: countryData[0]?.abbreviation || "",
			department: "",
			function: "",
			startWork: "",
			endWork: "",
		}));
	}, [employee.firstName, employee.lastName]);

	const handleConfirmationClose = () => {
		setShowConfirmationModal(false);
		setShowEmployeeInfo(true);
	};

	return (
		<div className={styled.createEmployee}>
			{!showEmployeeInfo ? (
				<>
					<h2>Modifier Employés</h2>
					<form
						key={employee.firstName + employee.lastName}
						onSubmit={(e) =>
							handleSubmit(
								e,
								employee,
								onAddEmployee,
								setEmployee,
								setShowConfirmationModal
							)
						}
						className={styled.form}
					>
						{/* Avatar Section */}
						<div className={styled.avatarSection}>
							<img
								src={
									employee.avatar || selectedEmployee?.avatar || defaultAvatar
								}
								alt="Employee Avatar"
								className={styled.avatar}
								onClick={() => fileInputRef.current.click()}
							/>
							<input
								type="file"
								accept="image/*"
								style={{ display: "none" }}
								ref={fileInputRef}
								onChange={(e) => handleFileChange(e, setEmployee)}
							/>
							<p className={styled.avatar__text}>
								Cliquez sur la photo pour la changer
							</p>
						</div>
						<div className={styled.generalInfos}>
							<h3>Informations Générales</h3>
							<div className={styled.infoGroup}>
								<div>
									<label>Prénom</label>
									<input
										type="text"
										name="firstName"
										value={
											employee.firstName
												? employee.firstName
												: selectedEmployee
												? selectedEmployee.firstName
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
										placeholder="John"
									/>
								</div>

								<div>
									<label>Nom</label>
									<input
										type="text"
										name="lastName"
										value={
											employee.lastName
												? employee.lastName
												: selectedEmployee
												? selectedEmployee.lastName
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
										placeholder="Doe"
									/>
								</div>

								<div>
									<label>Date de Naissance</label>
									<input
										type="date"
										name="birthday"
										value={
											employee.birthday
												? employee.birthday
												: selectedEmployee
												? selectedEmployee.birthday
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
									/>
								</div>
							</div>
						</div>

						<div className={styled.addressInfo}>
							<h3>Informations Adresse</h3>
							<div className={styled.infoGroup}>
								<div>
									<label>Rue</label>
									<input
										type="text"
										name="street"
										value={
											employee.street
												? employee.street
												: selectedEmployee
												? selectedEmployee.street
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
										placeholder="123 Main St"
									/>
								</div>

								<div>
									<label>Ville</label>
									<input
										type="text"
										name="city"
										value={
											employee.city
												? employee.city
												: selectedEmployee
												? selectedEmployee.city
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
										placeholder="New York"
									/>
								</div>

								<div>
									<label>État</label>
									<Dropdown
										name="state"
										onChangeDropdown={(value) =>
											handleStateChange(value, setEmployee)
										}
										optionsList={stateData}
										value={
											employee.state
												? employee.state
												: selectedEmployee
												? selectedEmployee.state
												: ""
										}
									/>
								</div>

								<div>
									<label>Code Postal</label>
									<input
										type="text"
										name="zipCode"
										value={
											employee.zipCode
												? employee.zipCode
												: selectedEmployee
												? selectedEmployee.zipCode
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
										placeholder="10001"
									/>
								</div>

								<div>
									<label>Pays</label>
									<Dropdown
										name="country"
										onChangeDropdown={(value) =>
											handleCountryChange(value, setEmployee)
										}
										optionsList={countryData}
										value={
											employee.country
												? employee.country
												: selectedEmployee
												? selectedEmployee.country
												: ""
										}
									/>
								</div>
							</div>
						</div>

						<div className={styled.workInfo}>
							<h3>Informations Professionnelles</h3>
							<div className={styled.infoGroup}>
								<div>
									<label>Department</label>
									<Dropdown
										name="department"
										onChangeDropdown={(value) =>
											handleDepartmentChange(value, setEmployee)
										}
										optionsList={departmentData}
										value={
											employee.department
												? employee.department
												: selectedEmployee
												? selectedEmployee.department
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
										placeholder="Engineering"
									/>
								</div>

								<div>
									<label>Fonction</label>
									<Dropdown
										name="function"
										onChangeDropdown={(value) =>
											handleJobChange(value, setEmployee)
										}
										optionsList={jobData}
										value={
											employee.function
												? employee.function
												: selectedEmployee
												? selectedEmployee.function
												: ""
										}
									/>
								</div>

								<div>
									<label>Date de Début</label>
									<input
										type="date"
										name="startWork"
										value={
											employee.startWork
												? employee.startWork
												: selectedEmployee
												? selectedEmployee.startWork
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
									/>
								</div>

								<div>
									<label>Date de Fin</label>
									<input
										type="date"
										name="endWork"
										value={
											employee.endWork
												? employee.endWork
												: selectedEmployee
												? selectedEmployee.endWork
												: ""
										}
										onChange={(e) => handleChange(e, setEmployee)}
									/>
								</div>
							</div>
						</div>
						{/* Buttons */}
						<div className={styled.btn}>
							<button type="submit" className={styled.btn__create}>
								Ajouter Employé
							</button>
							<button
								type="button"
								className={styled.btn__modif}
								onClick={(e) =>
									handleSubmit(
										e,
										employee,
										onAddEmployee,
										setEmployee,
										setShowConfirmationModal
									)
								}
							>
								Valider
							</button>
							<button
								type="button"
								className={styled.btn__reset}
								onClick={() => handleReset(setEmployee)}
							>
								Reset
							</button>
							<br />
							<button
								type="button"
								className={styled.btn__supp}
								onClick={() => handleDelete(setShowModal)}
							>
								⚠️ Archiver Employé ⚠️
							</button>
						</div>
						{/* Confirmation modals */}
						{showModal && (
							<div className={styled.confirmationModal}>
								<p>Êtes-vous sûr de vouloir archiver cet employé ?</p>
								<button onClick={() => confirmDelete(setShowModal)}>Oui</button>
								<button onClick={() => cancelDelete(setShowModal(false))}>
									Non
								</button>
							</div>
						)}
						{showConfirmationModal && (
							<div className={styled.confirmationModal}>
								<p>Employé créé avec succés !</p>
								<button onClick={handleConfirmationClose}>OK</button>
							</div>
						)}
					</form>
				</>
			) : (
				<EmployeeInfo employee={selectedEmployee} />
			)}
		</div>
	);
}
