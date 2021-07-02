const domDef ={
    button_paste: document.getElementById("paste-button"),
    paste: document.getElementById("paste"),
    insertArea: document.getElementById("textarea"),
    show: document.getElementById("show-text"),
    sended: document.getElementById("sended-text"),
    div: document.createElement('div'),
}
const globalVar = {
    recentPaste: '',
    globalPaste:'',
    whichChar:0,
    whichColor:'',
    mistakes:0,
    inputTime:[],
}
// when user click send
const handleClick = function(){
    resetToBegin()
    globalVar.globalPaste = globalVar.recentPaste
    highlightSendedText()
}
// reset values to begin except recentPast
const resetToBegin = ()=>{
    globalVar.globalPaste = globalVar.whichColor = ''
    globalVar.whichChar = globalVar.mistakes = 0
    globalVar.inputTime = []
    domDef.show.innerHTML = domDef.sended.innerHTML = '' 
} 
// when user input text into 2nd area
const handleInsert = wholeChar=>{
    const char = wholeChar.charAt(wholeChar.length-1)//we need only last input
    removeBadLetters()//only after user wrote incorrect character
    checkIsEqual(char,globalVar.globalPaste.charAt(globalVar.whichChar))
    showOnScreen(char)
    highlightSendedText()
    if(globalVar.whichChar == 1)
        stoper(true)
    if(globalVar.whichChar == globalVar.recentPaste.length){
        console.log(globalVar.mistakes)
        stoper(false)
    }
}
// if user input correct letter then color will be green else: red
const checkIsEqual = (a,b)=>{
    if(a==b){
        globalVar.whichChar++
        globalVar.whichColor = 'green'
    }
    else
        globalVar.whichColor = 'red'
}
const showOnScreen = (letter)=>{
    // domDef.show.style.color = globalVar.whichColor
    if(globalVar.whichColor == 'green'){
        domDef.show.innerHTML += letter
        domDef.show.style.color = globalVar.whichColor
    }
    else
        handleWithMistake(letter)
}
const handleWithMistake = (letter)=>{
    const spanElement = document.createElement("span")
    spanElement.style.color = globalVar.whichColor
    spanElement.innerHTML = letter
    domDef.show.appendChild(spanElement)
    globalVar.mistakes++
    playSound()
}
const removeBadLetters = ()=>{
    const toRemove = domDef.show.querySelector("span")
    if(toRemove)
    toRemove.remove()
}
const highlightSendedText = ()=>{
    let textTobold = globalVar.globalPaste
    let orangeText = ''
    for(let i = 0; i< textTobold.length; i++){
        i == globalVar.whichChar ? orangeText += `<span class="orange">${textTobold.charAt(i)}</span>` : orangeText += textTobold.charAt(i)
    }
    domDef.sended.innerHTML = orangeText
}
const playSound = ()=>{
    const audio = new Audio('error.mp3')
    audio.play()
}
const stoper = booleanVar=>{
    let recentTime = Date.now()
    if(booleanVar)
        globalVar.startDate = recentTime
    else{ 
        globalVar.inputTime.push(Math.round((recentTime - globalVar.startDate)*0.001))
        alert(`You needed ${globalVar.inputTime} seconds and You made ${globalVar.mistakes} mistakes .Your writing speed is around ${Math.round(globalVar.globalPaste.length/globalVar.inputTime)} characters per seconds`)
    }
}
// when user input text into 1st area
domDef.paste.addEventListener("input",e => {
    globalVar.recentPaste = e.target.value
})
// when user click send
domDef.button_paste.addEventListener("click",()=>handleClick())
// when user write in second textarea
domDef.insertArea.addEventListener("input",e=>handleInsert(e.target.value))