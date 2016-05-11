import React from 'react';
import Expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import ExpectJSX from 'expect-jsx';
Expect.extend(ExpectJSX);

import HelloWorld from '../src/component/hello_world';


describe('HelloWorld', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<HelloWorld />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <h2>Hello World</h2>;
    Expect(actualElement).toEqual(expectedElement);
  });
});
