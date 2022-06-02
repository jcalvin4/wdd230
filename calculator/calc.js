

function calculate(){
  let add1 = parseInt(document.querySelector('#add1').value);
 let add2 = parseInt(document.querySelector('#add2').value);
 let result = add1 + add2;
 document.querySelector('#sol').value = result;
}

document.querySelector('Add').addEventListener('click', calculate);
