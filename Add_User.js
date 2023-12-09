const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');
const phone = document.querySelector('#Phone');
const backEnd = "https://crudcrud.com/api/5fd0a524987342e0aceb5483a0fd3b30/Appointment_data";

myform.addEventListener('submit',onsubmit);

function onsubmit(e)
{

  e.preventDefault();
  
  var obj=
  {
    Name : name.value,
    Email : email.value,
    Phone : phone.value
  }


  if(name.value==''||email.value==''||phone.value=='')
  {
    //alert('Please Enter the Feilds');//
    msg.classList.add('error')

    setTimeout(()=> msg.remove(),3000);
    msg.innerHTML="Please Enter All Feilds*"
  }


  else
  {
    const li = document.createElement('li');
    const del = document.createElement('button');
    const edit = document.createElement('button');
    edit.textContent= "Edit";
    edit.style.backgroundColor="grey";
    edit.className="edit";


    edit.onclick=()=>
    {
      name.value=obj.Name,
      email.value=obj.Email,
      phone.value=obj.Phone
      user.removeChild(li);
    }


    del.textContent= " Delete ";
    del.style.backgroundColor = "red";
    del.className="Delete";


    del.onclick = () =>
    {
    // axios.delete("https://crudcrud.com/api/5fd0a524987342e0aceb5483a0fd3b30/Appointment_data",obj)
    //   .then(er => {console.log(er)})
    //   .catch(er => {console.log(er)})
      user.removeChild(li);
      localStorage.removeItem(obj.Email);
    }

    li.appendChild(document.createTextNode( obj.Name + ":" + obj.Email + ":" + obj.Phone));
    li.appendChild(edit);
    li.appendChild(del);
    
    user.appendChild(li);

      axios.post(backEnd,obj)
        .then(er => {console.log(er)})
        .catch(er => {console.log(er)})

    localStorage.setItem(obj.Email,JSON.stringify(obj));
    //Clear Feilds
    name.value='';
    email.value='';
    phone.value='';
  }

}