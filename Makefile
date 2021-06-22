all: test
re: build all

css:
	sass src/main.sass ui/main.css

js:
	tsc -m es2015 -t es2015 tests/client.ts --outdir build
	rollup -i build/tests/client.js -o ui/client.js
	rm -rf build

build: css js


test: 
	node ui/client.js
