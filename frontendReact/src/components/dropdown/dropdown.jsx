import PropTypes from "prop-types";
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

Dropdown.propTypes = {
	name: PropTypes.string.isRequired,
	onChangeDropdown: PropTypes.func.isRequired,
	optionsList: PropTypes.array.isRequired,
	defaultValue: PropTypes.string.isRequired,
};
