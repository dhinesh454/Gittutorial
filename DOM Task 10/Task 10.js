var inputName =document.getElementById('name');
var inputEmail=document.getElementById('email');

var sub=document.getElementById('my_form');

sub.addEventListener('submit', userdetail);


function userdetail(e)
{
    e.preventDefault();
    // console.log(inputName.value);
    // console.log(inputEmail.value);

    localStorage.setItem('Name',inputName.value);
    localStorage.setItem('Email', inputEmail.value)
    console.log(localStorage.getItem('Name'));
    console.log(localStorage.getItem('Email'));
    
}

