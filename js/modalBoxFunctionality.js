var modal = document.getElementById("firstModal");
//get the modal window
var modalButton = document.getElementById("modalButton");
//get the modal button
var modalCloseButton = document.getElementsByClassName("closeButton");
//get the modal closing button

modalButton.addEventListener("click",openModal);

modalCloseButton[0].addEventListener("click",closeModal);

window.addEventListener("click", outsideClickClose)

function closeModal(){
    modal.style.display = "none";
}

function outsideClickClose(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

function openModal(){
    modal.style.display = "block";
}

