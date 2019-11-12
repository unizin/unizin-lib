/* eslint-disable import/first */
jest.mock('react-dom');
import { createPortal } from 'react-dom';
import initstoryshots from '@storybook/addon-storyshots';
/* eslint-enable import/first */
require('babel-plugin-require-context-hook/register')();

createPortal.mockImplementation(children => children);

initstoryshots();
