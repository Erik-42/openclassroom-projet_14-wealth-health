// import React from "react";
// import styled from "./viewEmployee.module.scss";
// import Avatar from "../../assets/img/avatar/H2G2-Grok-only.svg";

// export default function ViewEmployee() {
// 	return (
// 		<div className={styled.viewEmployee}>
// 			<nav className={styled.viewEmployee__navbar}>
// 				<h2 className={styled.viewEmployee__navbar__title}>HR Employee</h2>
// 				<div className={styled.viewEmployee__navbar__menu}>menu hamburger</div>
// 			</nav>

// 			<main className={styled.viewEmployee__main}>
// 				<section className={styled.viewEmployee__main__general}>
// 					<article className={styled.viewEmployee__main__general__viewEmployee}>
// 						<div
// 							className={
// 								styled.viewEmployee__main__general__viewEmployee__avatar
// 							}
// 						>
// 							<label htmlFor="avatarImg">Photo Employé</label>
// 							<input
// 								className={styled.viewEmployee__main__view__avatar__img}
// 								src={Avatar}
// 								alt="photo employé"
// 								type="image"
// 								id="avatarImg"
// 								placeholder="Adam"
// 								disabled
// 							/>
// 						</div>
// 						<div
// 							className={
// 								styled.viewEmployee__main__general__viewEmployee__infos
// 							}
// 						>
// 							<div
// 								className={
// 									styled.viewEmployee__main__general__viewEmployee__infos__container1
// 								}
// 							>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container1__firstName
// 									}
// 								>
// 									<label htmlFor="firstName">First Name</label>
// 									<input
// 										type="text"
// 										id="firstName"
// 										placeholder="Adam"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container1__lastName
// 									}
// 								>
// 									<label htmlFor="lastName">Last Name</label>
// 									<input
// 										type="text"
// 										id="lastName"
// 										placeholder="Douglas"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container1__birthday
// 									}
// 								>
// 									<label htmlFor="birthday">Birthday</label>
// 									<input
// 										type="date"
// 										id="birthday"
// 										placeholder="11/03/1952"
// 										disabled
// 									/>
// 								</div>
// 							</div>
// 							<div
// 								className={
// 									styled.viewEmployee__main__general__viewEmployee__infos__container2
// 								}
// 							>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container2__street
// 									}
// 								>
// 									<label htmlFor="street">Street</label>
// 									<input
// 										type="text"
// 										id="street"
// 										placeholder="1200 E. California Blvd"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container2__city
// 									}
// 								>
// 									<label htmlFor="city">City</label>
// 									<input
// 										type="text"
// 										id="city"
// 										placeholder="Pasadena"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container2__state
// 									}
// 								>
// 									<label htmlFor="state">State</label>
// 									<input
// 										type="text"
// 										id="state"
// 										placeholder="California"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container2__zipCode
// 									}
// 								>
// 									<label htmlFor="zipCode">Zip Code</label>
// 									<input
// 										type="number"
// 										id="zipCode"
// 										placeholder="CA 91125"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container2__country
// 									}
// 								>
// 									<label htmlFor="country">Country</label>
// 									<input type="text" id="country" placeholder="USA" disabled />
// 								</div>
// 							</div>
// 							<div
// 								className={
// 									styled.viewEmployee__main__general__viewEmployee__infos__container3
// 								}
// 							>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container3__department
// 									}
// 								>
// 									<label htmlFor="department">Department</label>
// 									<input
// 										type="text"
// 										id="department"
// 										placeholder="R&D"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container3__function
// 									}
// 								>
// 									<label htmlFor="function">Function</label>
// 									<input
// 										type="text"
// 										id="function"
// 										placeholder="Engineer"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container3__startWork
// 									}
// 								>
// 									<label htmlFor="startWork">Start Work</label>
// 									<input
// 										type="date"
// 										id="startWork"
// 										placeholder="08/04/1978"
// 										disabled
// 									/>
// 								</div>
// 								<div
// 									className={
// 										styled.viewEmployee__main__general__viewEmployee__infos__container3__endWork
// 									}
// 								>
// 									<label htmlFor="endWork">End Work</label>
// 									<input
// 										type="date"
// 										id="endWork"
// 										placeholder="11/05/2001"
// 										disabled
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</article>
// 				</section>
// 				<div className={styled.btn}>
// 					<p>Actions possible sur les fiches employés:</p>

// 					<button className={styled.btn__modif}>Modifier employés</button>
// 				</div>
// 			</main>
// 		</div>
// 	);
// }
import React from "react";
import { useSelector } from "react-redux";
import EmployeeInfo from "../../components/employeeInfo/employeeInfo.jsx";
import styled from "./viewEmployee.module.scss";

export default function ViewEmployee() {
	const employee = useSelector((state) => state.employee.employee);

	return (
		<div className={styled.viewEmployee}>
			<nav className={styled.viewEmployee__navbar}>
				<h2 className={styled.viewEmployee__navbar__title}>HR Employee</h2>
				<div className={styled.viewEmployee__navbar__menu}>menu hamburger</div>
			</nav>

			<main className={styled.viewEmployee__main}>
				<section className={styled.viewEmployee__main__general}>
					<article className={styled.viewEmployee__main__general__viewEmployee}>
						<EmployeeInfo employee={employee} />
					</article>
				</section>
				<div className={styled.btn}>
					<p>Actions possible sur les fiches employés:</p>
					<button className={styled.btn__modif}>Modifier employés</button>
				</div>
			</main>
		</div>
	);
}
