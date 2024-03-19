const displayContent = (content) =>{
    display.value += content
    display.placeholder = 0
}

const minusone = (content) =>{
    str = display.value
    str = str.slice(0,-1)
    display.value = str
}

const allClear = () =>{
    display.placeholder = 0
    console.log("AC")
    display.value =""
}

const showResult = () =>{
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = ""
        display.placeholder = "Invalid Expression"
    }
    finally{
        console.log("Task completed");
    }
}