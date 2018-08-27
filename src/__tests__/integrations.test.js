import React from 'react';
import moxios from 'moxios';
import App from 'components/App';
import { mount } from 'enzyme';
import Root from 'Root';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'fetch 1' }, { name: 'fetch 2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  // Attempt to render the 'entire' app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');
  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
  }, 100);
});
