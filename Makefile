install:
	npm ci 
	
node bin/brain-games.js 

publish:
	npm publish --dry-run
	