import Api from "../../Api";
export const SET_CATS_CATEGORIES="SET_CATS_CATEGORIES";
export const SET_CATS_GALLERY="SET_CATS_GALLERY";
export const SET_ERROR="SET_ERROR";
export const SET_IS_LOADING="SET_IS_LOADING";
const catsActionCreators={
setCatsCategories:(payload)=>({type:SET_CATS_CATEGORIES,payload}),
setCatsGallery:(payload)=>({type:SET_CATS_GALLERY,payload}) ,
setError:(payload)=>({type:SET_ERROR,payload}),
setIsLoading:(payload)=>({type:SET_IS_LOADING,payload}),
fetchCatsCategories:()=>async(dispatch)=>{
const response=await Api.getCatsCategories()
    dispatch(catsActionCreators.setCatsCategories(response.data))
} ,
fetchCatsGallery:(catId,limit)=>async (dispatch)=>{

}
}
export default catsActionCreators