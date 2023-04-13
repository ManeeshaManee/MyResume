
const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
//function validation()
//              {
//
//                  var name =document.getElementById("name").value;
//                  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
//                  var email=document.getElementById("email").value;
//                   var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
//                   var subject=document.getElementById("subject").value;
//                   var message=document.getElementById("message").value;
//                  if (!name.match(nameRegex)) {
//                      var inputElement = document.getElementById("name");
//                       alert("Name contain only alphabets");
//
//                      return false;
//                  }
//                  else if (!email.match(validRegex)) {
//
//                      alert("Enter a valid email address.");
//                      return false;
//                  }
//                    else  if (subject == null || subject == "") {
//                      // var inputElement = document.getElementById("subject");
//                      alert("Enter a subject");
//
//                      return false;
//                  }
//                 else  if(message ==null || message =="")
//                  {
//                      var inputElement = document.getElementById("message");
//                      // inputElement.placeholder = "Enter a Message";
//                       return false;
//                  }
//
//              }
//var nameError= document.getElementById('name-error');
//
//function validateName(){
//    var name= document.getElementById('name').value;
//
//    if(name.length==0){
//
//        nameError.innerHTML ='Name is required';
//        return false;
//    }
//    }
//
//
//}