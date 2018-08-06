import { createAction } from 'redux-actions';

export const ADD_AURAL_NOTIFICATION = 'ADD_AURAL_NOTIFICATION';
export const REMOVE_AURAL_NOTIFICATION = 'REMOVE_AURAL_NOTIFICATION';

export const addAural = createAction(ADD_AURAL_NOTIFICATION);
export const removeAural = createAction(REMOVE_AURAL_NOTIFICATION);
