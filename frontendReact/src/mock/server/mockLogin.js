import jwt from "jsonwebtoken";

const mockLogin = (username, password) => {
	// Simuler une réponse de connexion avec un token
	const token = jwt.sign(
		{ username: username, role: "user" }, // Payload
		"secretkey", // Clé secrète pour signer le token
		{ expiresIn: "24h" } // Expiration du token
	);

	// Stocker le token localement (par exemple, dans localStorage)
	localStorage.setItem("authToken", token);
	return token;
};

// Appeler la fonction lors de la connexion
const handleLogin = (username, password) => {
	const token = mockLogin(username, password);
	console.log("Token généré:", token);
};
