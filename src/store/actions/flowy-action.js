import jsonData from '../../finalData.json';
export const flowDataLoad=()=>{
    return (dispatch)=>{
        dispatch(FLOWY_DATA_LOADED(jsonData))
    }
   
}
 export const FLOWY_DATA_LOADED=(folwyData)=>{
    return {type:"FLOWY_DATA_LOADED",payload:folwyData}
}