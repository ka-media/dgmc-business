
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


function randomNum() {
     const randomNumber = Math.floor(Math.random() * 789);
     //return Math.floor(Math.random() * 0123456789);

        if (randomNumber !== 0) {
          id = "DGMC/";
          document.getElementById('transact').innerHTML = id + randomNumber * 0123456;
         }
}
//Date setting
let date = new Date() 
     document.getElementById('date').textContent = date;
     
     