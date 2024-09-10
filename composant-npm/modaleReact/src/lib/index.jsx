import "react";
import PropTypes from "prop-types";

export default function HelloWorld(props) {
	const { greetee = "World" } = props;

	return <div>Hello, {greetee}!</div>;
}

HelloWorld.propTypes = {
	greetee: PropTypes.string,
};
