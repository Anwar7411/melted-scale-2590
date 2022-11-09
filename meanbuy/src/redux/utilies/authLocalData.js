const authgetData=(key)=>{
    try{
        let data=localStorage.getItem(key);
        data=JSON.parse(data);
        return data;
    }
    catch(e){
        return null;
    }

}

const authsaveData=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}

export {authgetData,authsaveData}