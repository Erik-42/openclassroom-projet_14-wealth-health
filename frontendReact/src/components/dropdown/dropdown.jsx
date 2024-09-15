import styled from "./dropdown.module.scss";

export default function Dropdown({
	name,
	onChangeDropdown,
	optionsList,
	defaultValue,
}) {
	return (
		<select
			className={styled.dropdown}
			defaultValue={defaultValue}
			id={name}
			name={name}
			onChange={(e) => onChangeDropdown(e.target.value)}
		>
			{optionsList.map((option, index) => (
				<option key={index} value={option.abbreviation}>
					{option.name}
				</option>
			))}
		</select>
	);
}
