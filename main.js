let takeCall = document.querySelectorAll('.number');
let closeBtn = document.querySelectorAll('.closeBtn');
let thanksBlock = document.querySelector('.thanksBlock');
let html = document.querySelector('html');
let popupBlock = document.querySelector('.popupBlock');
let callbackOrder = document.querySelector('.callbackOrder');
let tnxbtn = document.querySelector('.tnxbtn');

for(let i=0;i<takeCall.length;i++){
	takeCall[i].addEventListener('click', call);
}
for(let i=0;i<closeBtn.length;i++){
	closeBtn[i].addEventListener('click', remove);
}
tnxbtn.addEventListener('click', (e) =>{
	remove(e);
	thanksBlock.classList.toggle('active');
})

function call(e){
	e.preventDefault();
	callbackOrder.classList.toggle('active');
}
function remove(e){
	e.target.parentElement.classList.remove('active');
	console.log(e.target)
}