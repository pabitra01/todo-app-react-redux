const initialState={
    arr:[]
};
const additem=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                arr:[...state.arr,action.payload]
            }
        case "DEL":
            const li=state.arr.filter((e)=> e.id != action.payload)
            return{
               ...state,
               arr:li
            }
        case "REMOVE":
            return {
                arr:[]
            }
        default: return state;

    }
}
export default additem