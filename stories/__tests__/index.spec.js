/* eslint-disable import/first */
jest.mock('react-dom');
import { createPortal } from 'react-dom';
import initstoryshots from '@storybook/addon-storyshots';
/* eslint-enable import/first */

createPortal.mockImplementation(children => children);

initstoryshots();
