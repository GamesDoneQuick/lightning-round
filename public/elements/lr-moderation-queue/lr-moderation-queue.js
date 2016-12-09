(function () {
	'use strict';

	Polymer({
		is: 'lr-moderation-queue',
		properties: {
			activeTweetId: {
				type: String,
				value: 0
			},
			_rawReplies: {
				type: Object
			},
			replies: {
				type: Object
			}
		},

		observers: [
			'_onRawRepliesReceived(_rawReplies.*)'
		],

		_onRawRepliesReceived() {
			const newReplies = this._rawReplies;
			const convertedReplies = [];
			for (const item in newReplies) {
				if (!{}.hasOwnProperty.call(newReplies, item)) {
					continue;
				}

				convertedReplies.push(newReplies[item]);
			}
			this.replies = convertedReplies;
		},

		approve(e) {
			this.$.repliesQuery.ref.child(e.model.reply.id_str).child('approval_status').child('tier1').set('approved');
		},

		pend(e) {
			this.$.repliesQuery.ref.child(e.model.reply.id_str).child('approval_status').child('tier1').set('pending');
		},

		reject(e) {
			this.$.repliesQuery.ref.child(e.model.reply.id_str).child('approval_status').child('tier1').set('rejected');
		},

		isPending(item) {
			if (!item.approval_status) {
				return true;
			}

			return item.approval_status.tier1 === 'pending';
		},

		isApproved(item) {
			return item.approval_status && item.approval_status.tier1 === 'approved';
		},

		isRejected(item) {
			return item.approval_status && item.approval_status.tier1 === 'rejected';
		},

		toggleCollapse() {
			this.$.collapse.toggle();
		}
	});
})();
