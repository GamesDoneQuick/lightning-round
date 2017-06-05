/* eslint-env node */
const git = require('git-rev');
const replace = require('replace-in-file');

git.long(localGitHash => {
	const hash = process.env.TRAVIS_COMMIT ? process.env.TRAVIS_COMMIT : localGitHash;
	const indexPath = 'build/default/index.html';
	replace.sync({
		files: indexPath,
		from: [
			'{{commit_hash}}',
			'environment: \'development\''
		],
		to: [
			hash,
			'environment: \'production\''
		]
	});
	console.log('Successfully set Raven.config.release to %s in %s.', hash, indexPath);
});
