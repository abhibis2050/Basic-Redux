import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {updateJokes}  from '../reducers/jokesReducer';



const fetchjokesapi=async()=>{
   const res = await fetch("https://api.chucknorris.io/jokes/random")
   const result = await res.json()
//    console.log(result);
   return result.value
}


function*fetchjokes(){

    try {
        const joke = yield fetchjokesapi()
        console.log(joke,"<--------------joke");
        yield put(updateJokes(joke))
        
    } catch (error) {
        console.log(error);
    }
}



function*jokeSaga(){
yield takeEvery("ADD_JOKES",fetchjokes)
}


export default jokeSaga