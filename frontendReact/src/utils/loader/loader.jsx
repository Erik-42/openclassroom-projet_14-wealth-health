import styled from "./loader.module.scss";

export default function Loader() {
	return (
		<div className={styled.loader}>
			<div className={styled.spinner}></div>
		</div>
	);
}
