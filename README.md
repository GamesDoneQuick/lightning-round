# lightning-round
Our standalone app for harvesting interview questions from Twitter.

## Setup
1. Set up [lightning-round-server](https://github.com/GamesDoneQuick/lightning-round-server).
	- These instructions also go through setting up the Firebase app.
2. Clone and deploy this repo to Firebase:
  
	```
	npm install -g bower firebase-tools
	git clone git@github.com:GamesDoneQuick/lightning-round.git
	cd lightning-round
	bower install
	```
3. Edit [`public/elements/lr-app/lr-app.html`](https://github.com/GamesDoneQuick/lightning-round/blob/master/public/elements/lr-app/lr-app.html#L20-L25)
with your Firebase app's `auth-domain`, `database-url`, and `api-key`.
4. Deploy to Firebase

	```
	firebase deploy
	```

## Screenshot
![Preview Screenshot](https://i.imgur.com/9bNR49G.png)
