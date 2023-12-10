const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user = document.querySelector('#users');
const phone = document.querySelector('#Phone');
const backEnd = "https://crudcrud.com/api/c0cf5fed1fa746f2b8bd6a8b19c0ac61/Appointment_data";

myform.addEventListener('submit',onsubmit);

window.addEventListener("DOMContentLoaded",()=>
{
axios.get(backEnd)
  .then((response)=>{
  for(let i = 0; i<response.data.length;i++)
  {
      showdata(response.data[i]);
  }
}
)
.catch((response)=>{
  console.log(response);
})

}
)



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

      axios.post(backEnd,obj)
        .then(er => {console.log(er)})
        .catch(er => {console.log(er)})
      
        obj.Id = axios.get(backEnd)
        .then(er => {
          //console.log(er.data[er.data.length - 1]._id);
          return er.data[er.data.length -1]._id; })
        .catch(er => {console.log(er)})


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
          axios.delete(backEnd+"/"+obj.Id)
          .then(user.removeChild(li))
          .catch(er => {console.log(er)})
        }


        del.textContent= " Delete ";
        del.style.backgroundColor = "red";
        del.className="Delete";

        del.onclick = () =>
        {
          axios.delete(backEnd+"/"+obj.Id)
          .then(user.removeChild(li))
          .catch(er => {console.log(er)})
        }

        li.appendChild(document.createTextNode( obj.Name + ":" + obj.Email + ":" + obj.Phone));
        li.appendChild(edit);
        li.appendChild(del);
        
        user.appendChild(li);

          // axios.post(backEnd,obj)
          //   .then(er => {console.log(er)})
          //   .catch(er => {console.log(er)})

        //localStorage.setItem(obj.Email,JSON.stringify(obj));
        //Clear Feilds
        name.value='';
        email.value='';
        phone.value='';
    }

}

function showdata(i){
  const li = document.createElement('li');
    const del = document.createElement('button');
    const edit = document.createElement('button');
    edit.textContent= "Edit";
    edit.style.backgroundColor="grey";
    edit.className="edit";


    edit.onclick=()=>
    {
      name.value=i.Name,
      email.value=i.Email,
      phone.value=i.Phone,
      axios.delete(backEnd+"/"+i._id)
      .then(user.removeChild(li))
      .catch(er => {console.log(er)})
      //localStorage.removeItem(i.Email);

    }


    del.textContent= " Delete ";
    del.style.backgroundColor = "red";
    del.className="Delete";

    del.onclick = () =>
    {
    axios.delete(backEnd+"/"+i._id)
      .then(user.removeChild(li))
      .catch(er => {console.log(er)})
    
    }

    li.appendChild(document.createTextNode( i.Name + ":" + i.Email + ":" + i.Phone));
    li.appendChild(edit);
    li.appendChild(del);
    
    user.appendChild(li);
}

