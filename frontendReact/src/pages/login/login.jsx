import LoginModal from "../../components/loginModal/loginModal";
import styled from "./login.module.scss";

export default function Login() {
	return (
		<main className={styled.bg__login}>
			<LoginModal />
		</main>
	);
}
