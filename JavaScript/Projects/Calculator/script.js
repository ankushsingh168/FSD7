function Calculate(data) {
    const equation = document.getElementById("text")
    if(data === "AC")
    {
        equation.innerText = "0";
        return;

    }
      if(data === "C")
    {
        // const eq = equation.innerText
        // const newEQ = equation.innerText;
        // equation.innerText = newEQ ;

    }
    equation.innerText =equation.innerText.slice(0, -1);
    return;
}