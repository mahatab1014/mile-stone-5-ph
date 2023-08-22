function setInnerText(spanID, text) {
    const setText = document.getElementById(spanID);
    setText.innerText = text;
    return setText;
}
function refresh(){
    const today = new Date().getDate();
    setInnerText("today-date", today)
    
    const currentTime = new Date();
    setInnerText("current-time", currentTime)
}