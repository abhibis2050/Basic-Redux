import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'



const fetchjokes=async()=>{
   const res = await fetch("https://api.chucknorris.io/jokes/random")
   const result = res.json()
   console.log(result);
   return result.value
}


function*changeAge(){

    try {
        const joke = yield fetchjokes()
        yield put({type:"UPLOAD_AGE_SUCCESS",payload:joke})
        
    } catch (error) {
        console.log(error);
    }
}



function*jokeSaga(){
yield takeEvery("getJokes",fetchjokes)
}


export default jokeSaga