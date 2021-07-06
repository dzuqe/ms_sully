all: test
re: build all

css:
	sass src/main.sass ui/main.css

js:
	# fix broken lib: https://github.com/near/near-api-js/issues/593
	sed -i 's/delete(fn)/fn = null/g' node_modules/u3/lib/cache.js
	sed -i 's/_/[]/g' src/{Location,Npc}.ts
	sed -i 's/_:/?:/g' src/Window.ts
	rollup -c rollup.config.js

json:	
	python data/gen.py > ui/data.json

build: css js json

test: 
	cd ui; python -m http.server 8000; cd -
