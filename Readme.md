# transform css-to-js

> A utility to convert your CSS into JS or React Native compatible styles.

The online repl is available at https://transform.now.sh/css-to-js

### Installation
```
npm i transform-css-to-js
```

### Usage

import cssToJS from "transform-css-to-js"

const css = `.main-wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
}

#content {
  flex: 1;
}

ul {
  padding: 20px 0;
  flex: 1;
}

li {
  font-family:'Lato';
  color: whitesmoke;
  line-height: 44px;
}`

const jsStyle = cssToJS(css)
const reactNativeCompatibleCSS = cssToJS(css, true)
```

### API

#### cssToJS(CSS, [supportReactNative])

## License
MIT @ Ritesh Kumar


