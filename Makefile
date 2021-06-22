all: test
re: build all

build:
	tsc -m es2015 -t es2015 tests/client.ts --outdir build
	rollup -i build/tests/client.js -o ui/client.js
	rm -rf build

test: 
	node ui/client.js
