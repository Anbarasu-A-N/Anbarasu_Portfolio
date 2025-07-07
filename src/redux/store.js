import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// Load state from local storage
const persistedState = localStorage.getItem('reduxState') 
  ? JSON.parse(localStorage.getItem('reduxState')) 
  : {};

const store = configureStore({
  reducer,
  preloadedState: persistedState, // Load initial state from local storage
  // No need to configure middleware for thunk here
  // enhancers: [/* add enhancers if any */],
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Save state to local storage on every store update
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;



