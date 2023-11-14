const myform = document.querySelector('#my-form');
      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const msg = document.querySelector('.msg');
      const user = document.querySelector('#users');

      myform.addEventListener('submit',onsubmit);
      //document.addEventListener('submit',addtostore);
      
      function onsubmit(e){
        e.preventDefault();
        if(name.value==''||email.value=='')
        {
          //alert('Please Enter the Feilds');//
          msg.classList.add('error')

          setTimeout(()=> msg.remove(),3000);
          msg.innerHTML="Please Enter All Feilds*"
        }
        else{
          localStorage.setItem(name.value,email.value);
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
          user.appendChild(li);
          //Clear Feilds
          name.value='';
          email.value='';
        }
      }
      