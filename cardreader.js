let right = -20
let i = 4
let timeout = 0

//autofocus textbox
document.onload = function() {
    swipe.focus()
    //cut down on getElementById spam
    let attendees = document.getElementById("attendees")
    let warning = document.getElementById("warning")
    let swipe = document.getElementById("swipe")
}

function clear() {
    swipe.value = ""
    attendees.value = ""
    attendees.scrollTop = attendees.scrollHeight
}

//copy to clipboard
function toClipboard() {
    changeWarning("Copied to Clipboard", "#009376", "#5a5a5a",)
    let text = attendees.value
    navigator.clipboard.writeText(text)
}

//update warning element
function changeWarning(text, border, background) {
    if (text == undefined) {
        text = ""
    }
    if (border == undefined) {
        border = "transparent"
    }
    if (background == undefined) {
        background = "transparent"
    }
    warning.innerHTML = text
    warning.style.borderColor = border
    warning.style.backgroundColor = background
    i = 4
    right = -20
}

//hide pop-up
setInterval(function(){
    right = right + i
    if (right >= 100) {
        changeWarning()
}}, 100)

//detect key press from card
window.onkeydown= function(key){
    //autofocus textbox
    swipe.focus()
    if ((key.key == "Enter") && swipe.value != "") {
        text = swipe.value
        // trim everything but student id
        try {
            //unless student id is already trimmed
            if (text[0] != "1") {
                text = text.split("+")[1]
                text = text.split("?")[0]
            }
        }
        catch(err) {
            console.log(err)
            text = "E"
        }
        // detect and print bad swipe 
        if ((text.search("E") != -1) || (text[0] != 1)) {
            changeWarning("Bad Swipe!","red","#5a5a5a")
        }
        //print correct swipe + log user
        else {
            changeWarning("Welcome!", "#ffc107", "#5a5a5a",)
            attendees.value += `${text}\n`
            attendees.scrollTop = attendees.scrollHeight
        }
        swipe.value = ""
    }}