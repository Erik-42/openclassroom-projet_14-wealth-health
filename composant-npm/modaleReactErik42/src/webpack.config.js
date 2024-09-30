module.exports = {
	env: {
		es6: true,
		node: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,

				exclude: /node_modules/,

				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
						},
					},
				],
			},
		],
	},

	resolve: {
		extensions: [".js", ".jsx"],
	},
};
