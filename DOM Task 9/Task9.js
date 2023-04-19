var edit = document.querySelectorAll('.list-group-item');
edit.forEach( function (node)
{
    var editbtn = document.createElement('button')
    editbtn.className='btn btn-Warning btn-sm float-right edit';
    editbtn.textContent='Edit'
    node.appendChild(editbtn)
});





























var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter=document.getElementById('filter')
// console.log(form);
// console.log(itemList);


//submit event
form.addEventListener('submit',addItem);
//remove an element once u click the X
itemList.addEventListener('click',removeItem);
 ///filter event 
filter.addEventListener('keyup',filterItems);


function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value
    var newDescription=document.getElementById('description').value

   
var li=document.createElement('li');
li.className='list-group-item';
// console.log(li);
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(newDescription));



//create delete button


   var Delete=document.createElement('button') ;
   Delete.className='btn btn-danger btn-sm float-right delete';
   Delete.appendChild(document.createTextNode('X'));
   /////Add a edit button 
   var editbtn = document.createElement('button')
   editbtn.className='btn btn-Warning btn-sm float-right edit';
   editbtn.textContent='Edit'
   


    li.appendChild(Delete);
    li.appendChild(editbtn);
    itemList.appendChild(li);


}


//removes

function removeItem(e)
{
    if(e.target.classList.contains('btn-danger'))// class list contain letter for eg 'danger'
    {
        if(confirm('Are You Sure?'))
        {
          
            itemList.removeChild(e.target.parentElement);
        }
    }
}


function filterItems(e)
{
// if aperson type in upper or lower case we have to ge as a lower case only 
 var text = e.target.value.toLowerCase();
var items=itemList.getElementsByTagName('li')
//instead o document we used itemList we created alr4eady the tag li in the item list only came .if 
//we use document .getelement id used all the li came in the html tag //

//array html collection to normal 

Array.from(items).forEach(function(item){
    var itemfirstchild=item.firstChild.textContent;
    var second_child=item.childNodes[1].textContent;
if(itemfirstchild.toLocaleLowerCase().indexOf(text)!=-1||second_child.toLocaleLowerCase().indexOf(text)!=-1){
    item.style.dispaly= 'block';

}
else{
    item.style.display='none';
}


});



}

