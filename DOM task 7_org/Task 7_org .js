//1.parent element 
const Items = document.querySelector('#items');
console.log(Items.parentNode.parentElement);

Items.parentElement.style.backgroundColor='grey';




// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='grey'
// console.log(itemList.parentNode.parentNode.parentNode);
/// parent node and parent element same 



//2.lastelementchild
console.log(Items.lastElementChild);
Items.lastElementChild.textContent='HELLO';

//3.Last child 
console.log(Items.lastChild);
//because if there is space available it considered as a child node 
//thats y we use lastelementchild 


//5.first elementchild
console.log(Items.firstElementChild);

Items.firstElementChild.style.color='red';

//6.first child 
console.log(Items.firstChild);
//because if there is space available it considered as a child node 
//thats y we use lastelementchild 

//7.nextsibiling

console.log(Items.nextSibling);
//sama as child nodes if space there taken space also consider so we cant use this properly
//instead of this we use nextsibling elements 


//next element siblings &&previouselement sibling
console.log(Items.nextElementSibling);
//no sibling next
const Main =document.querySelector('.title');
console.log(Main.nextElementSibling);


console.log(Items.previousElementSibling);


//add hello before Item lister 

var  newDiv = document.createElement('div')
newDiv.className='hell';
newDiv.id='hell';
newDiv.setAttribute('title','HelloDIv');
var newdivText=document.createTextNode('HELLo')
newDiv.appendChild(newdivText)


 var Container = document.querySelector('header .container')
 
 var h1=document.querySelector('header h1')
 console.log(Container);
console.log(h1)
console.log(newDiv);


Container.insertBefore(newDiv,h1)



var classList=document.querySelector('div .list-group');
var ItemList=document.querySelector('div li');//var ItemList=document.querySelector('div .class-list-group');
console.log(classList);
console.log(ItemList);
classList.insertBefore(newDiv,ItemList);
