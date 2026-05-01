let n = -5;
if (n > 0) {
  console.log("positive Integer");
} else {
  console.log("Negative Integer");
}

if ((age = 20)) {
  console.log("person is eligible");
} else {
  console.log("person is not eligible");
}

let l = 100;
if (n >= 90) {
  console.log(A);
} else if (n >= 75) {
  console.log(B);
} else if (n >= 50) {
  console.log(C);
} else {
  console.log("failed");
}

// let usr = "abcde";
// let pass = "1234";
// if (usr == "abcde" && pass == "1234") {
//   console.Log("login succes");
// } else {
//   console.Log("login failed");
// }


let data;
let xyz ="ankush";
data = xyz || "N/A"
// if(name){
//     data = name;
// }else{
//     data = "N/A"
// }
console.log(data);

let x=2;
console.log(x>10 && y<6)

for(let i=0; i<5; i++)
{
    if(i==3)
    {
        continue;
    }
    console.log(i)
}


let choice =8;
switch(choice)
{
    case 1:{
        console.log("tea")
        break;
    }
     case 2:{
        console.log("coffee")
        break;
    }
     case 3:{
        console.log("lassi")
        break;
    }
     default:{
        console.log("pani")
        
    }
}