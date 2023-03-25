import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const getUserName = async ()=> {
   const res =  await fetch("https://jsonplaceholder.typicode.com/users")
   const result = await res.json()
   console.log(result);
   return result[Math.floor(Math.random()*10)].name
}
function* fetchUser(action) {
  try {
    const userName = yield getUserName()
    yield put ({type:"UPLOAD_NAME_SUCCESS",payload:userName})
    // const user = yield call(getUserName)


    // const user = yield call(Api.fetchUser, action.payload.userId)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
  }
}

function*changeAge(){
    try {
        yield put({type:"UPLOAD_AGE_SUCCESS",payload:30})
        
    } catch (error) {
        console.log(error);
    }
}

// Watcher Or Saga
function* userSaga() {
  yield takeLatest('UPDATE_NAME', fetchUser)
  yield takeLatest('UPDATE_AGE', changeAge)
}

export default userSaga