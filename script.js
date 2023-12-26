const signUpBody = document.querySelector('.signUpBody');
const text = signUpBody.querySelector('.leftText')
const errorMsg = text.querySelector('.errorMsg')
const emailInput = text.querySelector('#email')
const subscribe = text.querySelector('.subscribe')
const successMsg = document.querySelector('.successMsg')
const userEmail = successMsg.querySelector('#userEmail')
const dismissBtn = successMsg.querySelector('.dismissBtn')

subscribe.addEventListener("click", () =>{
    if(!validateEmail(emailInput.value)){
        errorMsg.style.display= 'block';
        emailInput.style.border= '2px solid #c8918c';
        emailInput.style.backgroundColor= '#ffe8e6';
        emailInput.style.fontWeight= '700';
        emailInput.classList.add('inputError');
    }else{
        signUpBody.style.display= 'none';
        successMsg.style.display= 'flex';
        userEmail.textContent= email.value;
    }
    
    function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }
})

dismissBtn.addEventListener("click", function(){
    location.reload();
})

