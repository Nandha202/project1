//   // Statement 1
// let name= 'john';
// let name1 = 'sam';        // Statement 2
// let  = 'jai';        // Statement 3
     

// // document.getElementById("demo").innerHTML =
// // "The value of z is " + z + ".";  
// console.log(z)

// let x = 6;
//  let y= 1;
//  let z= x < y
//  if(x < y){
//   
//  }
     

// function toCelsius(f) {
//    return (5/9) * (f-32);
//  }
//  console.log('toCelsius(77)')
// var  x = 10;

// // Here x is 10

// {  
//   var x = 2;
  
//   // Here x is 2
// }
// // document.getElementById('test').innerHTML='x';
// console.log(x)/



// function myFunction(p1, p2,p3) {
//   return p1 * p2 * p3;
// }
// // document.getElementById("demo").innerHTML = myFunction(4, 3, 5);
// console.log myFunction(5, 5, 5);
// let text = "";

// for (let i = 2; i < 5; --i) {
//   text += "The number is " + i + "<br>";
// }
// // document.getElementById("demo").innerHTML = text;
// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num == 2) return true;

//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(53));



// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// else if (number > 1) {

//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// else {
//     console.log("The number is not a prime number.");
// }


// for(Expression; Condition; value){

// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i  <= cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;


// function myFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("numb").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

// var x= myFunction(4, 3, 4);
// console.log(x);
// function myFunction (a1 , a2, a3) {
//     return(a1 * a2* a3);
// 
class FormValidation{
    formValues = {
        username :"",
        email :"",
        phone :"",
        password : "",
        confirmpassword :""
    }
    errorValues = {
        usernameErr :"",
        emailErr :"",
        phoneErr :"",
        passwordErr : "",
        confirmpasswordErr :""
    }
    showErrorMsg(index,msg){
      const form_group = document.getElementsByClassName("form-group")
      [index]
      form_group.classList.add('error')
      form_group.getElementsByTagName('span')[0].textContent = msg
    }
    showSuccessMsg(index){
        const form_group =document.getElementsByClassName('form-group')
        [index]
        form_group.classList.remove('error')
        form_group.classList.add('success')
    }
    getInputs(){
       this.formValues.username=document.getElementById('username').value.trim()
       this.formValues.email=document.getElementById('email').value.trim()
       this.formValues.phone=document.getElementById('phone').value.trim()
       this.formValues.password=document.getElementById('password').value.trim()
       this.formValues.confirmpassword=document.getElementById('confirmpassword').value.trim()

    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter User-Name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
         }else if(this.formValues.username.length <= 4){
            this.errorValues.usernameErr="* User-name must be atleast 5 Characters"
            this.showErrorMsg(0,this.alertmessage.usernameErr)}
        else if(this.formValues.username.length <= 14){
            this.errorValues.usernameErr="* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.alertmessage.usernameErr)}
         else{
            this.errorValues.usernameErr=""
            this.showSuccessMsg(0)
         }   
           
         }
    
    validateEmail(){
          const regexp =/ ^ ([a-az=Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
          if(this.formValues.email === ""){
            this.errorValues.emailErr = "* Please Enter vaild mail"
            this.showErrorMsg(0,this.errorValues.emailErr)
         }else if(!(regexp.test(this.formValues.email))){
            this.errorValues.usernameErr="* Invaild mail"
            this.showErrorMsg(1,this.errorValues.emailErr)}
         else{
            this.errorValues.emailErr=""
            this.showSuccessMsg(1)
         }   
        }
    validatePhone(){
          const phone= /^\d{10}$/
          if(this.formValues.phone === ""){
            this.errorValues.phoneErr = "* Please Enter your phone number"
            this.showErrorMsg(2,this.errorValues.phoneErr)
         }else if(!(phone.test(this.formValues.phone))){
            this.errorValues.phoneErr="* "
            this.showErrorMsg(2,this.errorValues.phoneErr)}
         else{
            this.errorValues.phoneErr=" Invalid phone no"
            this.showSuccessMsg(2)
         }   

    }
    validatePassword(){
        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please provide a password"
            this.showErrorMsg(3,this.errorValues.passwordErr)
         }else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr="* password must be atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passwordErr)} 
            else if(this.formValues.password.length > 10){
                this.errorValues.passwordErr="* password should not exceeds 10 Characters"
                this.showErrorMsg(3,this.errorValues.passwordErr)}
             else{
                this.showErrorMsg.passwordErr=""
                this.showSuccessMsg(3)
             }    
    }
    validateConfirmpassword(){
        if(this.formValues.confirmpassword === ""){
            this.errorValues.confirmpasswordErr = "* Invalid confirm password"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)
         }else if(this.formValues.confirmpassword=== this.formValues.password &&
            this.errorValues.passwordErr===""){
            this.errorValues.passwordErr="* password must be atleast 5 Characters"
            this.showErrorMsg(4,this.errorValues.confirmpasswordErr)} 
            else if(this.formValues.confirmpassword.length > 10){
                this.errorValues.confirmpasswordErr="* password should not exceeds 10 Characters"
                this.showErrorMsg(4,this.errorValues.confirmpasswordErr)}
             else{
                this.showErrorMsg.confirmpasswordErr=""
                this.showSuccessMsg(4)
             }    
    }
    alertmessage(){
           const {usernameErr,emailErr,phoneErr,passwordErr,confirmpasswordErr}= this.errorValues
           if(usernameErr==="" && emailErr === "" && phoneErr === "" &&
           passwordErr=== "" && confirmpasswordErr === ""){
            swal("Registration Successfull", "Thankyou, "+this.formValues.username,
            "success")
            console.log(this.formValues)
            this.removeInputs()
           }else{
            swal("Give vaild Inputs","click ok to continue","error")
           }
    }   
    removeInputs(){
         const form_group =document.getElementsByClassName('form-group')
         console.log(form_group)
         Array.form(form_group).forEach(element => {
            element.getElementsByTagName('inputs')[0].value=""
        element.getElementsByTagName('span')[0].textContent="" 
    element.classList.remove('success')   
     });
    }
}
const validateUserInputs  = new  FormValidation
()
document.getElementsByClassName('form')[0].
addEventListener("submit", event => {
    event.preventDefault()
    validateUserInputs.getInputs()
    validateUserInputs.validateUsername()
    validateUserInputs.validateEmail()
    validateUserInputs.validatePhone()
    });
 
