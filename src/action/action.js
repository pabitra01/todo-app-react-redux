export const add=(data)=>{
    return{
        type:"ADD",
        payload:{
            id:Date.now().toString(),
            data:data
        }
    }
}
export const del=(id)=>{
    return{
        type:"DEL",
        payload:id
    }
}
export const rem=()=>{
    return{
        type:'REMOVE'
    }
}