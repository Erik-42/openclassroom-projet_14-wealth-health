import { useState, useEffect, useRef } from "react";
import styled from "./CreateEmployee.module.scss";
import defaultAvatar from "../../assets/img/avatar/H2G2-Grok-only.svg";
import stateData from "../../assets/data/states.json";
import countryData from "../../assets/data/country.json";
import Dropdown from "../dropdown/dropdown";

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

// Fonction pour gérer la soumission du formulaire
function handleSubmit(e, employee, onAddEmployee, setEmployee) {
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
}

// Fonction pour gérer l'affichage de la modal de confirmation
function handleDelete(setShowModal) {
	setShowModal(true);
}

// Fonction pour confirmer la suppression
function confirmDelete(setShowModal) {
	// Logique pour supprimer l'employé
	setShowModal(false);
}

// Fonction pour annuler la suppression
function cancelDelete(setShowModal) {
	setShowModal(false);
}

// eslint-disable-next-line react/prop-types
export default function CreateEmployee({ onAddEmployee }) {
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
	const fileInputRef = useRef(null);

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
			<form
				onSubmit={(e) => handleSubmit(e, employee, onAddEmployee, setEmployee)}
				className={styled.form}
			>
				<div className={styled.avatarSection}>
					{/* Image de l'avatar cliquable */}
					<img
						src={employee.avatar || defaultAvatar}
						alt="Employee Avatar"
						className={styled.avatar}
						onClick={() => fileInputRef.current.click()}
					/>
					{/* Input fichier caché */}
					<input
						type="file"
						accept="image/*"
						style={{ display: "none" }}
						ref={fileInputRef}
						onChange={(e) => handleFileChange(e, setEmployee)}
					/>
				</div>

				<div className={styled.generalInfos}>
					<h3>Informations Générales</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>Prénom</label>
							<input
								type="text"
								name="firstName"
								value={employee.firstName}
								onChange={(e) => handleChange(e, setEmployee)}
								placeholder="John"
							/>
						</div>

						<div>
							<label>Nom</label>
							<input
								type="text"
								name="lastName"
								value={employee.lastName}
								onChange={(e) => handleChange(e, setEmployee)}
								placeholder="Doe"
							/>
						</div>

						<div>
							<label>Date de Naissance</label>
							<input
								type="date"
								name="birthday"
								value={employee.birthday}
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
								value={employee.street}
								onChange={(e) => handleChange(e, setEmployee)}
								placeholder="123 Main St"
							/>
						</div>

						<div>
							<label>Ville</label>
							<input
								type="text"
								name="city"
								value={employee.city}
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
								defaultValue={employee.state}
							/>
						</div>

						<div>
							<label>Code Postal</label>
							<input
								type="text"
								name="zipCode"
								value={employee.zipCode}
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
								defaultValue={employee.country}
							/>
						</div>
					</div>
				</div>

				<div className={styled.workInfo}>
					<h3>Informations Professionnelles</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>Département</label>
							<input
								type="text"
								name="department"
								value={employee.department}
								onChange={(e) => handleChange(e, setEmployee)}
								placeholder="Engineering"
							/>
						</div>

						<div>
							<label>Fonction</label>
							<input
								type="text"
								name="function"
								value={employee.function}
								onChange={(e) => handleChange(e, setEmployee)}
								placeholder="Software Engineer"
							/>
						</div>

						<div>
							<label>Date de Début</label>
							<input
								type="date"
								name="startWork"
								value={employee.startWork}
								onChange={(e) => handleChange(e, setEmployee)}
							/>
						</div>

						<div>
							<label>Date de Fin</label>
							<input
								type="date"
								name="endWork"
								value={employee.endWork}
								onChange={(e) => handleChange(e, setEmployee)}
							/>
						</div>
					</div>
				</div>

				<div className={styled.btn}>
					<button type="submit" className={styled.btn__create}>
						Ajouter Employé
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
						onClick={() => handleDelete(setShowModal)}
					>
						⚠️ Supprimer Employé ⚠️
					</button>
				</div>

				{showModal && (
					<div className={styled.confirmationModal}>
						<p>Êtes-vous sûr de vouloir supprimer cet employé ?</p>
						<button onClick={() => confirmDelete(setShowModal)}>Oui</button>
						<button onClick={() => cancelDelete(setShowModal)}>Non</button>
					</div>
				)}
			</form>
		</div>
	);
}
