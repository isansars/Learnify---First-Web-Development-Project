const countSubs= {
    lastSubscriber: null,
    totalSubs: 0
};

function updateDisplay(){
    document.querySelector("#totalSubs").innerText = countSubs.totalSubs;
}

const button = document.querySelector("#subscribe-button");
button.addEventListener('click', function(event){
    if (document.getElementById("email") !== null && document.getElementById("email") !== "isansars@learnify.com"){
        countSubs.lastSubscriber = document.getElementById("email");
        countSubs.totalSubs++;
        const dataSubs = {
            email: countSubs.lastSubscriber,
            subsNumber: totalSubs
        }
        putHistory(dataSubs);
        updateDisplay();
    }
})