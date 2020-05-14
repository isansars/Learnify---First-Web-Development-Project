const CACHE_KEY = "email_subs";

function checkForStorage(){
    return typeof(Storage) !== "undefined"
}

function putHistory(data){
    if(checkForStorage()){
        let subsData = null;
        if (localStorage.getItem(CACHE_KEY) === null){
            subsData = [];
        } else{
            subsData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        subsData.unshift(data);

        localStorage.setItem(CACHE_KEY, JSON.stringify(subsData));
    }
}

function showHistory(){
    if(checkForStorage()){
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else{
        return [];
    }
}