import {
    configureStore,
    applyMiddleware,
    combineReducers,
  } from '@reduxjs/toolkit';
  import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // Updated import path
  
  import thunk from 'redux-thunk';
  import countryReducer from './countries/countriesSlice';
  
  const rootReducer = combineReducers({
    countries: countryReducer,
  });
  
  const store = configureStore(
    { reducer: rootReducer },
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;
  