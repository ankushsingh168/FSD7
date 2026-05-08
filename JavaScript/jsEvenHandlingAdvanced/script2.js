document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("FullName").value
  const em = document.getElementById("Email").value
  const ps = document.getElementById("Password").value

  const dataPacket = {
    FullName : fn ,
    Email : em,



  }
 
});

// function submit(){
//     preven
//     console.log("ABCD");

// }

// function reset(){
//     window.location.reload();
// }
 console.log("form reset");

 document.querySelector("form").addEventListener("reset", (event) => {
    event.preventDefault();

 });

 document.addEventListener("keydown" ,(even) =>{
    let keyPress = even.key;
    keyPress === "Escape" && window.location.reload();

 });