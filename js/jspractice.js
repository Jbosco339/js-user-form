console.log('we are so back');
 age = 39;
 namez = 'solomon'
 console.log(`my name is ${namez} and i am ${age}`)
 console.log(namez.toUpperCase());
 let foods = ['rice', 'beans', 'yam', 'tomato'];
 console.log(foods[2]);
 foods.push('apple')
 console.log(foods);

 const person = {
    age: '24',
    height: '6.7',
    drink: 'cooke',
    address: {
        street: 'wealth avenue',
        city: 'lagos',
        country: 'Nigeria'
    }
 }
 console.log(person);
let x = '7';
if (x===7){
    console.log('x is equal to 7');
}else{
    console.log('x is not equal to seven')
}

const addNumber = (numb1, numb2)=>{
   return numb1 + numb2;
}
console.log(addNumber(5,3));

// selectors begins here
const btn = document.querySelector('button');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my_form').style .background = "lightblue";
    document.querySelector('#div1').style.background='gray'
})