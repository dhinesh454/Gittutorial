console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);

// document.title='Item'
// console.log(document.doctype)
// console.log(document.all[10]);
// document.all[10].textContent='hello'
// //but this not the way to do because if we add something index will change.
// console.log(document.forms)
// //HTML collection are in form of array
// console.log(document.forms[0])




// var headerTitle=document.getElementById('header-title')
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// // Item Lister 123 
// // Item Lister

// //diff between textcontent & innertext
// //textcontent shows everything which you hide also 
// //      <h1 id="header-title">Item Lister <span style="display:none">123</span></h1>
// //innertext shows only text hide cant show ..

// headerTitle.innerHTML='dhinesh'
// console.log(headerTitle.textContent);

// var headerTitle=document.getElementById('header-title')

// document.getElementById("main-header").style.borderBottom='solid 3px black'

// ///task 3 by id 
// const addItem = document.getElementById('main')
// addItem.firstElementChild.style.fontWeight='bold';


//   addItem.firstElementChild.style.color='green'

// task 3 by class name 
// const addItem=document.getElementsByClassName('title')
// console.log(addItem)
// addItem[0].style.fontWeight='bold'
// addItem[0].style.color='green'




// //get elements by class name
// const Items=document.getElementsByClassName("list-group-item") 

// console.log(Items);

// Items[1].textContent='hello'
// Items[1].style.backgroundColor='yellow'
// Items[0].style.fontWeight='bold'


// for(let i=0;i<Items.length;i++){
//     Items[i].style.backgroundColor='yellow'
// }


// note : HTML gives array type only


// const header = document.querySelector('#main-header')
//  console.log(header.lastElementChild);



// ///  one method to change any syle in odd elements  
// var odd = document.querySelectorAll('li');
// console.log(odd[1])
// for(i=0;i<odd.length;i=i+2)

// {

//     odd[i].style.color='green'



    

// }

// another one in the youtube time 37:00