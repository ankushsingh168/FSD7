function submit() {
  const fn = document.getElementById("fullName").value;
   const em = document.getElementById("email").value;
  const ph = document.getElementById("phone").value;

//   document.getElementById("nameerror").innerText = "Invalid FullName";
//   document.getElementById("phoneerror").innerText = "Invalid Name";
//   document.getElementById("emailerror").innerText = "Invalid Name";
//   document.getElementById("passworderror").innerText = "Invalid Name";

document.querySelectorAll(".error").forEach((element) =>{
    element.innerText ="";
}) 
  if (!/^[A-Za-z\s]+$/.test(fn)) {
    document.getElementById("nameError").innerText = "Invalid FullName";
  }
  if  (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("phoneError").innerText = "Invalid Phone";
  }
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(em)) {
    document.getElementById("emailError").innerText = "Invalid Email";
  }
 
}
