document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const dob = document.getElementById("DOB").value
     const curDate = document.getElementById("CurrentDate").value


    //  let CurYear2 =curDate.spilit("-")[0];

    //  console.log(CurYear2);

    //  console.log( Number(CurYear2));
     
     const Age = Number(curDate.spilit("-")[0])-Number(dob.spilit)("-")[0];
     document.getElementById("DOB").value ="";
       document.getElementById("CurrentDate").value ="";

         document.getElementById("myage").innerText = Age;

      
      
    

})