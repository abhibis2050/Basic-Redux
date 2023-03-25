// AN ACTION CREATER IS ALWAYS A FUNCTION
// AND AN ACTION CREATER RETURNS AN ACTION WHICH IS ALSO A FUNCTION

// export default (status)=>{
//     return {
//         type:"UPDATE_STATUS",
//         payload:status
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const updateStatusAction = createAction("UPDATE_STATUS");



// export const fetchName = () => {
//   return async (dispatch) => {

//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const result = await res.json();
//     const name = result[4].name;
// // console.log(result);
// //     console.log(name);
//     dispatch({ type: "UPDATE_NAME", payload: name });
    
//   };
// };
