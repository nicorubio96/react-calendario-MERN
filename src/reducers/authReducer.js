import { types } from "../types/types"

const initialiState={
    checking:true,
    //uid:null,
    //name:null
}


export const authReducer =(state=initialiState,action)=>{
    switch(action.type){

        case types.authLogin:
            return {
                ...state,
                checking:false,
                ...action.payload
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking:false
            }
        
            case types.authLogout:
                return{
                    checking:false
                }
        default:
            return state
    }

}