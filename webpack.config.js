module.exports = {
	entry: './assets/js/app.js',
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
	},
	module: {
		loaders: [
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
			{ test: /\.js$/, loader: 'babel-loader?presets[]=es2015' },
		]
	}
}