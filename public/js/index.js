
 function reset() {
   document.getElementById('barrelLitres').remove();
}

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
function reset() {
     document.getElementById('default').remove();
    }
function hide() {
     document.querySelector('.wrap').remove();
}
//Date setting
let date = new Date() 
     document.getElementById('date').textContent = date;
     
     