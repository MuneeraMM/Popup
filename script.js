const model=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');

function openModal(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
function CloseModal(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');

}


for(let i=0; i< btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal)
}

btnCloseModal.addEventListener('click',CloseModal);

overlay.addEventListener('click',CloseModal);