(function () {
	'use strict';

	Polymer({
		is: 'lr-login-cover',

		login() {
			this.fire('login');
		}
	});
})();
