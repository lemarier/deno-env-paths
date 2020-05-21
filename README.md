# env-paths

Get paths for storing things like data, config, cache, etc

[![Test CI](https://github.com/lemarier/deno-env-paths/workflows/Test%20CI/badge.svg)](https://github.com//lemarier/deno-env-paths/actions)

```ts
import envPaths from "https://deno.land/x/env_paths/mod.ts";

const paths = envPaths("MyApp");

console.log(paths.data);
//=> '/Users/david/Library/Application Support/MyApp-deno'

console.log(paths.config);
//=> '/Users/david/Library/Preferences/MyApp-deno'
```

## API

### paths = envPaths(name, options?)

Note: It only generates the path strings. It doesn't create the directories for you.

#### name

Type: `string`

Name of your project. Used to generate the paths.

#### options

Type: `object`

##### suffix

Type: `string`<br>
Default: `'deno'`

**Don't use this option unless you really have to!**<br>
Suffix appended to the project name to avoid name conflicts with native
apps.

### paths.data

Directory for data files.

### paths.config

Directory for config files.

### paths.cache

Directory for non-essential data files.

###

Directory for log files.

### paths.temp

Directory for temporary files.

---

Inspired by [env-paths](https://github.com/sindresorhus/env-paths) from [sindresorhus](https://github.com/sindresorhus).
