<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Forms</title>
    </head>
        <body>
           
            <form onsubmit="saveToLocalStorage(event)">
            <label> Name</label>
            <input id="username" type="text" name="username" required/>
            <label> EmailId</label>
            <input  id="email" type="email" id='email' name="email" required/>  
            <button> Submit </button>
            </form>
            <ul id='listofusers'></ul>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js"></script>
            <script>
                function saveToLocalStorage(event) {
                  
                    event.preventDefault();
                    const name = event.target.username.value;
                    const email = event.target.email.value;
                    
                    const obj = {
                        name,
                        email
                    }
                    axios.post("https://crudcrud.com/api/7903ea7b5a3448f2b618df6c29df4bf1/BookingAppointmentdata",obj)
                   .then((response) =>{
                    showListofRegisteredUser(response.data);
                       console.log(response)
                   })
                   .catch((err) => {
                    document.body.innerHTML = document.body.innerHTML + "<h4>Error: Something Not found</h4>" 
                   console.log(err)
                   })
                   //localStorage.setItem(obj.email,JSON.stringify(obj));
                  //  showListofRegisteredUser(obj);
                }

                window.addEventListener('DOMContentLoaded', (event) => {

                    axios.get("https://crudcrud.com/api/7903ea7b5a3448f2b618df6c29df4bf1/BookingAppointmentdata")
                      .then((response) =>{
                        console.log(response)
                        for(i=0;i<response.data.length;i++){
                        showListofRegisteredUser(response.data[i]);
                      }
                      })

                      .catch(err => console.log(err))

                      
                      /*
                Object.keys(localStorage).forEach(key => {
                    const user = JSON.parse(localStorage.getItem(key))
                    console.log(JSON.parse(localStorage.getItem(key)))
                    showListofRegisteredUser(user)
                });
                */
            });

            

                function showListofRegisteredUser(users){
                  document.getElementById('username').value = '';
                 document.getElementById('email').value = '';

                    if(localStorage.getItem(users.email) !== null){
                        removeUsersFromScreen(users.email);
                    }
                    var parentNode = document.getElementById('listofusers');
                    var childNode = `<li id='${users.email}'> ${users.name} ${users.email} <button onclick=deleteUser('${users.email}')> Delete User </button> <button onclick=editUser('${users.email}','${users.name}')>Edit User</button></li>`;
                  parentNode.innerHTML = parentNode.innerHTML + childNode;
                }

                function editUser(email1,name1){
                    document.getElementById('email').value = email1;
                    document.getElementById('username').value = name1;
                    
                    deleteUser(email1);
                }

                function deleteUser(userName){

                    localStorage.removeItem(userName);
                    removeUsersFromScreen(userName);

                }

                function removeUsersFromScreen(emailID){
                    var parentNode1 = document.getElementById('listofusers');
                    var childNodeToBeDeleted = document.getElementById(emailID);
                    if(childNodeToBeDeleted){
                    parentNode1.removeChild(childNodeToBeDeleted);
                    }
                }

        
            </script>
        </body>
    
    </html>
