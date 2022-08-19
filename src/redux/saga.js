import {fork,call,all,takeLatest,put} from 'redux-saga/effects';
import * as types from './actionsTypes'
import {getResponse} from './api'

export function* onLoadRecipeAsync({query}){
   try{
const response= yield call(getResponse,query)
yield put({type:types.FETCH_RECIPE_SUCCESS,payload:response.data})
   }catch(error){
yield put({type:types.FETCH_RECIPE_FAILED,payload:error})
   }
    }
export function* onLoadRecipe(){
yield takeLatest(types.FETCH_RECIPE_START,onLoadRecipeAsync)
}

const recipeSaga=[fork(onLoadRecipe)]

export default function* rootSaga(){
    yield all([...recipeSaga])
}
