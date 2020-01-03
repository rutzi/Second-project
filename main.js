let takeCall = document.querySelectorAll('.number');
let closeBtn = document.querySelectorAll('.closeBtn');
let thanksBlock = document.querySelector('.thanksBlock');
let html = document.querySelector('html');
let popupBlock = document.querySelector('.popupBlock');
let callbackOrder = document.querySelector('.callbackOrder');
let tnxbtn = document.querySelectorAll('.tnxbtn');
let fastAppliBtn = document.querySelector('.fastAppliBtn');
let detailOrderBtn = document.querySelector('.detailOrderBtn');
let showfastPopup = document.querySelector('.showfastPopup');


function popUp(){
	for(let i=0;i<takeCall.length;i++){
		takeCall[i].addEventListener('click', call);
	}
	for(let i=0;i<closeBtn.length;i++){
		closeBtn[i].addEventListener('click', remove);
	}
	for(let i=0;i<tnxbtn.length;i++){
		tnxbtn[i].addEventListener('click', thanksBTn);
	};
	fastAppliBtn.addEventListener('click', showfastAppl);


	function thanksBTn(e) {
		// remove(e);
		// let checkone = document.querySelector('.callbackOrder input');
		// let checktwo = document.querySelector('.showfastPopup input');
		// if (checkone.value == '') {
		// 	e.target.parentElement.classList.toggle('active');
		// }else if (checktwo.value == '') {
		// 	e.target.parentElement.classList.toggle('active');
		// }else{
		// 	remove(e);
		// 	thanksBlock.classList.toggle('active');
		// }
		remove(e);
			thanksBlock.classList.toggle('active');
	}
	function showfastAppl(e){
		e.preventDefault();
		showfastPopup.classList.toggle('active');
	}
	function call(e){
		e.preventDefault();
		callbackOrder.classList.toggle('active');
	}
	function remove(e){
		e.preventDefault();
		e.target.parentElement.classList.remove('active');
	}
}
popUp();