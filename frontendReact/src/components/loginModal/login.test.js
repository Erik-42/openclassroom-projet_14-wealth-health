// login.test.js
import { mockUsers } from "../../mock/server/mockUsers";

const mockLogin = (email, password) => {
	return new Promise((resolve, reject) => {
		const user = mockUsers.find(
			(u) => u.email === email && u.password === password
		);
		if (user) {
			resolve(user);
		} else {
			reject("Invalid email or password");
		}
	});
};

// Test unitaire avec Jest ou tout autre framework de tests
test("login with valid credentials", async () => {
	const user = await mockLogin("john@example.com", "password123");
	expect(user).toBeDefined();
	expect(user.username).toBe("john_doe");
});

test("login with invalid credentials", async () => {
	try {
		await mockLogin("wrong@example.com", "wrongpassword");
	} catch (error) {
		expect(error).toBe("Invalid email or password");
	}
});
