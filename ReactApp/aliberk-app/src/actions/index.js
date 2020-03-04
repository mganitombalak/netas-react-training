//ACTION TYPE
export const TYPE_CATEGORIES= 'CATEGORIES';

//ACTION 
export const ACTION_LOAD_DATA='LOAD_DATA';
export const ACTION_SET_DATA='SET_DATA';


//ACTION CREATORS
export const loadDataActionCreator=(dataType)=>{
    return {
        type:ACTION_LOAD_DATA,
        objectType:dataType
    };
}

export const setDataActionCreator = (dataType,data) => {
    return {
        type: ACTION_SET_DATA,
        objectType: dataType,
        actionData: data
    };
}