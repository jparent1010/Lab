import{ Toast } from "./toast.js"

const toastButtons = [...document.getElementsByClassName("toast-button")];
const toastInput = document.getElementById("toast-input");


toastButtons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(toastInput.ariaValueMax.length!==0){
            const toast = new Toast(
                event.target.dataset.type,
                toastInput.value,
                document.getElementById('toast-conatainer')
            );
            toast.toast();
        }
    })
})