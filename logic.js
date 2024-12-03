let buttons=document.querySelectorAll("button")
let screen=document.querySelector(".screen")
let currentInp=""
buttons.forEach(button => {
    button.addEventListener("click",()=>
    {
        let value=button.textContent;
        if(value==="=")
        {
            try{
                    currentInp=eval(currentInp)
                    screen.textContent=currentInp
            }
            catch{
                screen.textContent="Error"
                // currentInp=""
            }
        }

        else if(value==="C"){
            currentInp=""
            screen.textContent="OutputScreen"


        }

        else{
            currentInp+=value;
            screen.textContent=currentInp
        }
    })
});