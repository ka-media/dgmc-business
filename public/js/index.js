//Scripts for purchase page
function item() {
     const item = prompt('Enter name of item');
     document.getElementById('item').textContent = item;
}
function units() {
     const unit = prompt('Enter units');
     document.getElementById('unit').textContent = unit;
}
function amount() {
     const amount = prompt('Enter amount');
     document.getElementById('amount').textContent = amount;
}
function person() {
     const name = prompt('Enter your name');
     document.getElementById('name').textContent = name;
}
function reset() {
     document.getElementById('default').remove();
    }
function hide() {
     document.querySelector('.wrap').remove();
}
/*function add() {
     document.querySelector('.wrap').add();
}*/
/*const reciept = document.querySelectorAll('.container')
const itemBtn = document.querySelector('item-btn');
const unitBtn = document.querySelector('unit-btn');
const amountBtn = document.querySelector('amount-btn');
const personBtn = document.querySelector('person-btn');
const resetBtn = document.querySelector('reset-btn');

const btn = document.getElementsByClassName('.container');
btn.addEventListener('click', function() {
     const itemBtn = document.getElementById('item-btn');
     itemBtn.textContent = itemBtn;
});*/

function randomNum() {
     const randomNumber = Math.floor(Math.random() * 13456789);
     //return Math.floor(Math.random() * 0123456789);

        if (randomNumber !== 0) {
          id = "DGMC/";
          document.getElementById('transact').innerHTML = id + randomNumber * 01234567;
         }
}
function save() {
     
}

//Date setting
let date = new Date() 
document.getElementById('date').textContent = date;

//additional coding
const button = document.getElementById('see-review');
          button.addEventListener('click', function() {
               //console.log('clicked');
               const review = document.getElementById('review');
               if(review.classList.contains('d-none')) {
                    review.classList.remove('d-none');
                    button.innerHTML = 'CLOSE REVIEW';
               } else {
                    review.classList.add('d-none');
                    button.innerHTML = 'SEE RECIEPT';
               }
          });

// Processing page here

// Sales page here