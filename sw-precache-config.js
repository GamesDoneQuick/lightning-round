/* eslint-env node */

module.exports = {
	staticFileGlobs: [
		'/index.html',
		'/manifest.json',
		'/bower_components/webcomponentsjs/*'
	],
	navigateFallback: 'index.html',

	// Don't intercept requests to the __ namespace, which Firebase owns.
	// If we do, things like OAuth will fail.
	navigateFallbackWhitelist: [/^(?!\/__)/]
};
