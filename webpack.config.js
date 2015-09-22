module.exports = {
	entry: {
		'proton': './src/index.js',
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[id].js',
		path: './build/',
	},
	resolve: {
		alias: {
			'pixi.js': 'pixi.js/src',
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
			}
		]
	},
}
