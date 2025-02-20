import { applyMiddleware, compose,combineReducers,createStore } from 'redux';
import { thunk } from "redux-thunk";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from './reducer/userReducer';
import { blogReducer } from './reducer/blogReducer';
import { blogCategoryReducer } from './reducer/blogCategoryReducer';
import { eventReducer } from './reducer/eventReducer';
import { paymentReducer } from './reducer/paymentReducer';
import { contactformReducer } from './reducer/contactformReducer';
import { galleryReducer } from './reducer/galleryReducer';
import { galleryCategoryReducer } from './reducer/galleryCategoryReducer';

const reducer = combineReducers({
  user:userReducer,
  allblogs:blogReducer,
  blogcategory:blogCategoryReducer,
  events:eventReducer,
  payment:paymentReducer,
  contactform:contactformReducer,
  gallery:galleryReducer,
  gallerycategory:galleryCategoryReducer, 
    })
    
    let inialState = {
    }
    
    const middleware = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const store = createStore(
      reducer,
      inialState,
      // applyMiddleware(...middleware)
     composeWithDevTools(applyMiddleware(...middleware))
    );
    export default store;