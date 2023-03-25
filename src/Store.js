import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import userReducer from "./reducers/userReducer";
import mySaga from "./sagas/userSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const Store =configureStore ({
reducer:{
user:userReducer
},
middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

// then run the saga
sagaMiddleware.run(mySaga)