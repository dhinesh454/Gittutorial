//add a  new element without a  class name 
  
// //by class

// const Items = document.getElementsByClassName("list-group-item")
// console.log(Items);   

// 




const Li = document.getElementsByTagName('li')

console.log(Li);

Li[2].style.fontWeight='bold'

for(let i=0;i<Li.length;i++)
{
 Li[i].style.backgroundColor='aqua'

}

//// in tag elemnt we can access the item  because all the items access by Tag element






// only 4 elements comes because we diidnt add a class name in item 5 when creating
//so we acn any access ,style, text not change 
//if u want to access by tag element only
