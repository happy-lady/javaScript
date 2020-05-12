## experimenting with typescript config
* `npm init` initialize package.json
* `npm install -g tsc` install typescript globally
* `tsc init` initialize tsconfig.json
* `tsc` run tsc
* or `npm run watch-ts`
* `npm run lint` to do eslint command

## referencing other typescript files
* /// <reference path="timer.ts" />
* or include in the tsconfig file all files
* or do imports, which work easiest with jest unit testing