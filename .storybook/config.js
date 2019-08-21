import { configure } from '@storybook/react';
import '../src/assets/main.css';

// automatically import all files ending in *.stories.js
require('babel-plugin-require-context-hook/register')();
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
