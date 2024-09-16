import { useState } from "react";
import styled from "./testPage.module.scss";

export default function TestPage() {
	// State pour différentes fonctionnalités de test
	const [inputValue, setInputValue] = useState("");
	const [counter, setCounter] = useState(0);
	const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
	const [imageVisible, setImageVisible] = useState(true);

	// Gestion du champ de texte
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	// Ajout d'un élément dans la liste
	const addItem = () => {
		setItems([...items, `Item ${items.length + 1}`]);
	};

	// Suppression d'un élément dans la liste
	const removeItem = () => {
		setItems(items.slice(0, -1));
	};

	// Gestion de la visibilité de l'image
	const toggleImageVisibility = () => {
		setImageVisible(!imageVisible);
	};

	// Affichage du compteur
	const incrementCounter = () => {
		setCounter(counter + 1);
	};

	const decrementCounter = () => {
		setCounter(counter - 1);
	};

	return (
		<div className={styled.testPage}>
			{/* Section de Test de Texte */}
			<div className={styled.testPage__entries}>
				<span className={styled.testPage__entries__title}>Test Page</span>

				{/* Champ de saisie */}
				<div className={styled.testPage__inputTest}>
					<span className={styled.testPage__inputTest__title}>Test Input:</span>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Type something..."
						className={styled.testPage__inputTest__input}
					/>
					<p className={styled.testPage__inputTest__output}>
						You typed: {inputValue}
					</p>
				</div>
			</div>

			{/* Section de Test de Boutons */}
			<div className={styled.testPage__buttonTest}>
				<span className={styled.testPage__buttonTest__title}>
					Button Tests:
				</span>

				{/* Boutons d'incrémentation / décrémentation */}
				<div className={styled.testPage__counter}>
					<button
						onClick={decrementCounter}
						className={styled.testPage__buttonTest__button}
					>
						Decrement
					</button>
					<span className={styled.testPage__counter__value}>{counter}</span>
					<button
						onClick={incrementCounter}
						className={styled.testPage__buttonTest__button}
					>
						Increment
					</button>
				</div>
			</div>

			{/* Section de Test de Liste */}
			<div className={styled.testPage__listTest}>
				<span className={styled.testPage__listTest__title}>List Tests:</span>

				{/* Liste d'éléments */}
				<ul className={styled.testPage__list}>
					{items.map((item, index) => (
						<li key={index} className={styled.testPage__list__item}>
							{item}
						</li>
					))}
				</ul>
				<button
					onClick={addItem}
					className={styled.testPage__buttonTest__button}
				>
					Add Item
				</button>
				<button
					onClick={removeItem}
					className={styled.testPage__buttonTest__button}
				>
					Remove Last Item
				</button>
			</div>

			{/* Section de Test d'Image */}
			<div className={styled.testPage__imageTest}>
				<span className={styled.testPage__imageTest__title}>Image Tests:</span>

				{/* Bouton pour cacher/montrer l'image */}
				<button
					onClick={toggleImageVisibility}
					className={styled.testPage__buttonTest__button}
				>
					{imageVisible ? "Hide Image" : "Show Image"}
				</button>

				{/* Image */}
				{imageVisible && (
					<img
						src="https://via.placeholder.com/150"
						alt="Test"
						className={styled.testPage__imageTest__image}
					/>
				)}
			</div>
		</div>
	);
}
