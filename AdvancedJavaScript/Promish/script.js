function getData(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data sent", value);
            if(nextData){
                nextData();
            }
            
        }, 3000);
    })
}