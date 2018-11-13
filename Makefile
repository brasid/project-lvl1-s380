install:
	npm install -g
start:
	npx babel-node -- src/bin/brain-games.js
	npx babel-node -- src/bin/brain-even.js
publish:
	npm publish
lint:
	npx eslint .
