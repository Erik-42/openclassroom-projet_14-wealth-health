import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Recréez __dirname en utilisant import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readDirRecursive(dir) {
	let results = [];
	const list = fs.readdirSync(dir);

	list.forEach(function (file) {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat && stat.isDirectory()) {
			results.push({
				name: file,
				type: "directory",
				children: readDirRecursive(filePath),
			});
		} else {
			results.push({
				name: file,
				type: "file",
			});
		}
	});

	return results;
}

// Utilisez __dirname pour obtenir le répertoire courant
const dirPath = __dirname;
// const dirPath = path.join("./"); // Change this to your desired directory

const structure = readDirRecursive(dirPath);

fs.writeFileSync("structure.json", JSON.stringify(structure, null, 2));
console.log("Structure exported to structure.json");
