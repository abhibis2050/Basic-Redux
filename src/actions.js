// export default (status)=>{
//     return {
//         type:"UPDATE_STATUS",
//         payload:status
//     }
// }

import { createAction } from "@reduxjs/toolkit";

export const updateStatusAction = createAction("UPDATE_STATUS")