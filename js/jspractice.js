const myForm = document.querySelector('#my_form');
const nameInpu = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    // emailInput.preventDefault();
    if(nameInpu.value === '' || emailInput.value === ''){
        message.classList.add('.eror');
        message.innerHTML = "please enter all fields";
        setTimeout(()=> message.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInpu.value} : ${emailInput.value}`));
        userlist.appendChild(li);

        // clear fields
        nameInpu.value ='';
        emailInput.value ='';
    }
}