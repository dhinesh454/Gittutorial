/// traverse the dom
const itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='grey'
// console.log(itemList.parentNode.parentNode.parentNode);





/// parent element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='grey'
// console.log(itemList.parentElement.parentElement.parentElement);

/// parent node and parent element same 

////childnodes

console.log(itemList.childNodes);

//text represent white spaces also taken as nodes in childnodes

console.log(itemList.children);
///only  elements gives that is why we use children only

//diff between childnodes is gives node arrays & children gives html array




console.log(itemList.children[1]);

///style change item 2 in yellow

itemList.children[1].style.backgroundColor='yellow'

//first child
console.log(itemList.firstChild);/// gives text node because space so use first element child

console.log(itemList.firstElementChild);


itemList.firstElementChild.textContent='Hello1'

 
itemList.lastElementChild.textContent='last items'






///next sibiling

console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
 







