#### chrome app 
关键词 json to go

![example](./cover.png)


### 安装异常处理

``` 
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: undefined@undefined
npm ERR! Found: eslint@5.16.0
npm ERR! node_modules/eslint
npm ERR!   dev eslint@"^5.4.0" from the root project
npm ERR!   peer eslint@">=2.0.0" from eslint-plugin-flowtype@2.50.3
npm ERR!   node_modules/eslint-plugin-flowtype
npm ERR!     dev eslint-plugin-flowtype@"^2.50.0" from the root project
npm ERR!     peer eslint-plugin-flowtype@"2.x" from eslint-config-umi@1.6.0
npm ERR!     node_modules/eslint-config-umi
npm ERR!       dev eslint-config-umi@"^1.4.0" from the root project
npm ERR!   1 more (eslint-plugin-import)
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@"^2.10.2 || ^3 || ^4" from eslint-plugin-jsx-a11y@5.1.1
npm ERR! node_modules/eslint-plugin-jsx-a11y
npm ERR!   dev eslint-plugin-jsx-a11y@"^5.1.1" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.

```


解决方案：
```
npm install --legacy-peer-deps

```