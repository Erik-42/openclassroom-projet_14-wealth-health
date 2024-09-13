import React from "react";
import styled from "./createEmployee.module.scss";
import Avatar from "../../assets/img/avatar/H2G2-Grok-only.svg"; // Assurez-vous que SVGR est configuré pour utiliser l'avatar comme ReactComponent

export default function CreateEmployee() {
	return (
		<div className={styled.createEmployee}>
			<nav className={styled.createEmployee__navbar}>
				<h2 className={styled.createEmployee__navbar__title}>HR Employee</h2>
				<div className={styled.createEmployee__navbar__menu}>
					menu hamburger
				</div>
			</nav>

			<form>
				<div className={styled["form-row"]}>
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name" placeholder="Lattk" />
					<label htmlFor="dob">Date of Birth</label>
					<input type="text" id="dob" placeholder="Sinoy" />
				</div>
				<div className={styled["form-row"]}>
					<label htmlFor="start">Start</label>
					<input type="text" id="start" placeholder="Zic Coe" />
					<label htmlFor="dar-coone">Dar of Coone</label>
					<input type="text" id="dar-coone" placeholder="Zip" />
				</div>
			</form>

			<div className={styled.btn}>
				<p>Actions possibles sur les fiches employés :</p>

				<button className={styled.btn__create}>Create employee</button>
				<button className={styled.btn__modif}>Modifier employee</button>
				<button className={styled.btn__cancel}>Annuler</button>

				{/* Ajouter un icône danger avant et après Supprimer */}
				<button className={styled.btn__supp}>⚠️ Supprimer employee ⚠️</button>

				{/* Ajouter une modal de confirmation de suppression */}
				<div className={styled.confirmationModal}>
					<p>Êtes-vous sûr de vouloir supprimer cet employé ?</p>
					<button>Oui</button>
					<button>Non</button>
				</div>
			</div>
		</div>
	);
}
