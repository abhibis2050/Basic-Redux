import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'

const getUserName = async ()=> {
   const res =  await fetch("https://jsonplaceholder.typicode.com/users")
   const result = res.json()
   return result[0].name
}
function* fetchUser(action) {
  try {
    const userName = yield getUserName()
    yield put ({type:"UPLOAD_NAME_SUCCESS",payload:userName})
    // const user = yield call(Api.fetchUser, action.payload.userId)
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  } catch (e) {
    console.log(e);
  }
}

// Watcher Or Saga
function* mySaga() {
  yield takeEvery('UPDATE_NAME', fetchUser)
}

export default mySaga