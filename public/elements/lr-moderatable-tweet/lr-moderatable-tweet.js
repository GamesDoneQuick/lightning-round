(function () {
	'use strict';

	Polymer({
		is: 'lr-moderatable-tweet',

		properties: {
			tweet: {
				type: Object
			},
			approved: {
				type: Boolean,
				reflectToAttribute: true,
				readOnly: true,
				value: false
			},
			rejected: {
				type: Boolean,
				reflectToAttribute: true,
				readOnly: true,
				value: false
			},
			pending: {
				type: Boolean,
				reflectToAttribute: true,
				readOnly: true,
				value: true
			}
		},

		observers: [
			'tweetChanged(tweet.*)'
		],

		tweetChanged() {
			// This gets fired like a dozen times for some reason, and causes weird bugs without this debounce.
			this.debounce('tweetChanged', this.handleTweetChanged, 10);
		},

		handleTweetChanged() {
			const tweet = this.tweet;

			if (!tweet || !tweet.approval_status) {
				return;
			}

			this._setApproved(tweet.approval_status.tier1 === 'approved');
			this._setRejected(tweet.approval_status.tier1 === 'rejected');
			this._setPending(tweet.approval_status.tier1 === 'pending');
		},

		approve() {
			this.fire('approved');
		},

		pend() {
			this.fire('pended');
		},

		reject() {
			this.fire('rejected');
		}
	});
})();
