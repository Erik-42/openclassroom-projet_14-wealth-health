/* eslint-disable no-undef */
import { mockUsers } from "../../mock/server/mockUsers";

// Fonction de mock de connexion
const mockLogin = (email, password) => {
	return new Promise((resolve, reject) => {
		const user = mockUsers.find(
			(u) => u.email === email && u.password === password
		);
		if (user) {
			resolve(user);
		} else {
			reject(new Error("Invalid email or password"));
		}
	});
};

// Test unitaire avec Jest

// Test avec des informations d'identification valides
test("login with valid credentials", async () => {
	const user = await mockLogin("john@example.com", "password123");
	expect(user).toBeDefined();
	expect(user.username).toBe("john_doe");
	expect(user.email).toBe("john@example.com"); // Vérification supplémentaire
});

// Test avec des informations d'identification invalides
test("login with invalid credentials", async () => {
	await expect(mockLogin("wrong@example.com", "wrongpassword")).rejects.toThrow(
		"Invalid email or password"
	);
});
