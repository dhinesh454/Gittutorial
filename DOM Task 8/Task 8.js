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
// console.log(form);
// console.log(itemList);



form.addEventListener('submit',addItem);
//remove an element once u click the X
itemList.addEventListener('click',removeItem);


function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value

   
var li=document.createElement('li');
li.className='list-group-item';
// console.log(li);
li.appendChild(document.createTextNode(newItem));



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



