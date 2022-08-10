import { configureStore } from '@reduxjs/toolkit';

import navBarReducer from '../features/navBarList/navBarSlice'
import linkItemAddReducer from '../features/linkItemAdd/linkItemAddSlice'
import navBarAddReducer from '../features/navBarAdd/navBarAddSlice'
import linkItemSearchReducer from '../features/linkItemSearch/linkItemSearchSlice'
import navBarSearchReducer from '../features/navBarSearch/navBarSearchSlice'
import favCheckboxReducer from '../features/favCheckbox/favCheckboxSlice'

export const store = configureStore({
  reducer: {
    navBarList:navBarReducer,
    linkItemAdd:linkItemAddReducer,
    navBarAdd:navBarAddReducer,
    linkItemSearch:linkItemSearchReducer,
    navBarSearch:navBarSearchReducer,
    favCheckbox:favCheckboxReducer,
  },
});
