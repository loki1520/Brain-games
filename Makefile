install:
	npm ci 
	
brain-games:
	node bin/brain-games.js 

brain-even:
	node bin/brain-even.js 

brain-cals:
	node bin/brain-cals.js 

brain-gcd:
	node bin/brain-gcd.js 

lint:
	npx eslint .

publish:
	npm publish --dry-run
