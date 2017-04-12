# eslint-config-ui-core

# Example
npm create package demo
```shell
$npm i sensitive-words -S
```

```javascript
const {sensitiveWords} = require(sensitive-words);
// ES2015 modules
import {sensitiveWords} from 'sensitive-words';

const filtered = sensitiveWords(
    'the new apple macbook pro has a touchbar',['pro', 'touchbar']
);

console.log(filtered);
```
