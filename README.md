# lightning-round
Our standalone app for harvesting interview questions from Twitter.

## Setup
1. Set up [lightning-round-server](https://github.com/GamesDoneQuick/lightning-round-server).
	- These instructions also go through setting up the Firebase app.
2. Clone and deploy this repo to Firebase:
	```
	npm install -g bower firebase-tools
	git clone git@github.com:GamesDoneQuick/lightning-round-server.git
	bower install
	firebase deploy
	```
