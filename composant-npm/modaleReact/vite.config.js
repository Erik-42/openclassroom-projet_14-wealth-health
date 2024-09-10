import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	build: {
		lib: {
			// eslint-disable-next-line no-undef
			entry: path.resolve(__dirname, "src/lib/index.jsx"),
			name: "modaleReact",
			fileName: (format) => `modaleReact.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	plugins: [react()],
});
