An attempt to reproduce the following error when using webpack + opentelemetry:

https://github.com/open-telemetry/opentelemetry-js/issues/4173
WebPack error: Critical dependency: the request of a dependency is an expression


# current status

Obviously I'm missing something in my attempt to reproduce.
My webpack build works:

```
% npm run build

> repro-webpack-dep-expr@1.0.0 build
> webpack

asset bundle.js 727 KiB [compared for emit] (name: main)
orphan modules 6.55 KiB [orphan] 11 modules
runtime modules 1.13 KiB 5 modules
modules by path ./node_modules/@opentelemetry/ 401 KiB 113 modules
modules by path ./node_modules/semver/ 61.6 KiB
  modules by path ./node_modules/semver/functions/*.js 7.94 KiB 24 modules
  modules by path ./node_modules/semver/ranges/*.js 14.6 KiB 11 modules
  modules by path ./node_modules/semver/internal/*.js 10.3 KiB 6 modules
  modules by path ./node_modules/semver/classes/*.js 26.3 KiB 3 modules
  + 1 module
./use-instr.mjs 285 bytes [built] [code generated]
http (ignored) 15 bytes [built] [code generated]
url (ignored) 15 bytes [built] [code generated]
./node_modules/events/events.js 14.5 KiB [built] [code generated]
./node_modules/shimmer/index.js 2.87 KiB [built] [code generated]
webpack 5.91.0 compiled successfully in 172 ms
```

Running by bundle fails, but I believe that is not the issue at hand.

```
% npm start

> repro-webpack-dep-expr@1.0.0 start
> node ./dist/bundle.js

/Users/trentm/tmp/repro-webpack-dep-expr/dist/bundle.js:14508
            _this.enable();
                  ^

TypeError: _this.enable is not a function
    at new InstrumentationBase (/Users/trentm/tmp/repro-webpack-dep-expr/dist/bundle.js:14508:19)
    at new HttpInstrumentation (/Users/trentm/tmp/repro-webpack-dep-expr/dist/bundle.js:78:9)
    at /Users/trentm/tmp/repro-webpack-dep-expr/dist/bundle.js:15667:22
    at /Users/trentm/tmp/repro-webpack-dep-expr/dist/bundle.js:15673:3
    at Object.<anonymous> (/Users/trentm/tmp/repro-webpack-dep-expr/dist/bundle.js:15675:12)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12)

Node.js v18.18.2
```

