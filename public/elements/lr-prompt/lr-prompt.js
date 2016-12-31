(function () {
	'use strict';

	Polymer({
		is: 'lr-prompt',

		properties: {
			activeTweetId: {
				type: String,
				notify: true,
				value: 0
			},
			activeTweet: {
				type: Object,
				notify: true
			}
		},

		openNewPromptDialog() {
			this.$.newPromptDialog.open();
		},

		openResetModerationDialog() {
			this.$.resetModerationDialog.open();
		},

		selectQuestion() {
			if (this.$.input.value.toLowerCase().indexOf('gamesdonequick') < 0) {
				this.$.input.value = null;
				this.$.selectErrorToast.show();
				return;
			}

			this.activeTweetId = this.$.input.value.split('/').pop();
			this.$.input.value = null;
		},

		resetModeration() {
			const updates = {};
			this.$.repliesQuery.ref.once('value', snapshot => {
				const replies = snapshot.val();
				for (const id in replies) {
					if (!{}.hasOwnProperty.call(replies, id)) {
						continue;
					}

					updates[`${id}/approval_status/tier1`] = 'pending';
					updates[`${id}/approval_status/tier2`] = 'pending';
				}
				this.$.repliesQuery.ref.update(updates);
			});
		}
	});
})();
