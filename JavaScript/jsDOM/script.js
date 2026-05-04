function Submit() {
  console.log("submit button clicked");
  const fn = document.getElementById("fullName").value;
  console.log(fn);

  document.getElementById("mydata").innerText = fn;
   document.getElementById("mydata2").innerText = fn;
  document.getElementById("fullName").value = "";

  document.getElementById("dataCard").classList.add("divsShow");
   document.getElementById("dataCard").classList.remove("divHide");

}

