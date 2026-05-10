// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const dob = document.getElementById("DOB").value;
//   const curDate = document.getElementById("CurrentDate").value;

//   //  let CurYear2 =curDate.spilit("-")[0];

//   //  console.log(CurYear2);

//   //  console.log( Number(CurYear2));

  
//   const Age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

//   document.getElementById("DOB").value = "";
//   document.getElementById("CurrentDate").value = "";

//   document.getElementById("myage").innerText = Age + "Years";
// });


document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = new Date(document.getElementById("DOB").value);
  const curDate = new Date(document.getElementById("CurrentDate").value);

  let age = curDate.getFullYear() - dob.getFullYear();

  // Agar current month/day dob se pehle hai to ek saal kam karna hoga
  const m = curDate.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && curDate.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";

  document.getElementById("myage").innerText = age + " Years";
});
