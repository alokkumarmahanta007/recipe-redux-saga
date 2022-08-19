import * as types from  './actionsTypes'

const initialState={
    recipe:[],
    isLoading:false,
    error:null

}
const recipeReducer=((state=initialState,action)=>{
    switch(action.type){
        case types.FETCH_RECIPE_START:
            return {
                ...state,
                loading:true
            }
            case types.FETCH_RECIPE_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    recipe:action.payload
                }
                case types.FETCH_RECIPE_FAILED:
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
                default:
                    return state
    }

})
export default recipeReducer;