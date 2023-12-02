module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,js,html,eot,svg,ttf,woff,woff2,otf,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};