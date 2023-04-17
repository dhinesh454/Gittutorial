// var header = document.querySelector('#main-header')
// header.style.borderBottom='solid 2px black'

// const Input = document.querySelector('input');
//   Input.value='Dhinesh'

// const Submit= document.querySelector('input[type="submit"]');
// Submit.value='SEND'


//        var lastItem= document.querySelector(".list-group-item:last-child");
      
//        var SecondItem=document.querySelector(".list-group-item:nth-child(2)");
//        var ThirdItem=document.querySelector(".list-group-item:nth-child(3)");

//        SecondItem.style.backgroundColor='green'
//        ThirdItem.textContent='';












       // var Item= document.querySelector(".list-group-item");
// console.log(Item);  ///<li class="list-group-item">Item 1</li>
       ///query selector gives first only






       //////////query selector all 

       var Items=document.querySelectorAll('.list-group-item')
Items[1].style.color='green'



var odd = document.querySelectorAll('.list-group-item:nth-child(odd)')

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}
var even =document.querySelectorAll('.list-group-item:nth-child(even)')

for(let i=0;i<even.length;i++){
    even[i].style.color='red'
}

