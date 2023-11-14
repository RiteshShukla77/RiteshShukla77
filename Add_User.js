const myform = document.querySelector('#my-form');
      const FullName = document.querySelector('#name');
      const email = document.querySelector('#email');
      const msg = document.querySelector('.msg');
      const user = document.querySelector('#users');
      let i="1";

      myform.addEventListener('submit',onsubmit);
      //document.addEventListener('submit',addtostore);
      
      function onsubmit(e){
        e.preventDefault();
        if(FullName.value==''||email.value=='')
        {
          //alert('Please Enter the Feilds');
          msg.classList.add('error')

          setTimeout(()=> msg.remove(),3000);
          msg.innerHTML="Please Enter All Feilds*"
        }
        else{
          let myobj={ Name: FullName.value ,
            Email : email.value
          }
          let obj_sr = JSON.stringify(myobj);
          localStorage.setItem("User "+i,obj_sr);
          let obj_dsr = JSON.parse(localStorage.getItem(i));
          var a = parseInt(i);
          a=a+1;
          i=a.toString();

          const li = document.createElement('li');
          li.appendChild(document.createTextNode(`${FullName.value} : ${email.value}`));
          user.appendChild(li);
          //Clear Feilds
          FullName.value='';
          email.value='';
        }
      }
      