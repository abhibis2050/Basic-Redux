import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import userReducer from "./reducers/userReducer";
import userSaga from "./sagas/userSaga";
import jokeReducers  from "./reducers/jokesReducer";
import rootSaga from "./sagas/rootsaaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const Store =configureStore ({
reducer:{
user:userReducer,
jokes:jokeReducers
},
middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

// then run the saga
sagaMiddleware.run(rootSaga)