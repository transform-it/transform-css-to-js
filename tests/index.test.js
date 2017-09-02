import test from 'ava'
import cssToJS from '../src'

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

test('should give correct JS object', (t) => {
	t.snapshot(cssToJS(css))
})

test('should give correct React Native Code', t => {
	t.snapshot(cssToJS(css, true))
})
