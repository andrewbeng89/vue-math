// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
const myTag = (constant, ...dynamic) => ({
  constant,
  dynamic,
});

let title = 'My App';

const date = new Date();

const render = () => myTag`
  <h1>Welcome to ${title}</h1>
  <p>The date is ${date.toLocaleDateString()}</p>
`;

render();
// { constant:
//   [ '\n  <h1>Welcome to ', '</h1>\n  <p>The date is ', '</p>\n' ],
//  dynamic: [ 'My App', '9/13/2019' ] }

title = 'Frontend WG';

render();
// { constant:
//   [ '\n  <h1>Welcome to ', '</h1>\n  <p>The date is ', '</p>\n' ],
//  dynamic: [ 'Frontend WG', '9/13/2019' ] }

export default render;
