// let fd =[
//     ["Rajvardhan" , "18-11-1997", 7049246810, "Bhopal", "Teacher"]
//      ["pranaydas" , "18-11-1998", 7049246810, "Westbangal", "Teacher"]
//       ["mohitpayasi" , "18-11-1999", 7049246810, "rewa", "Teacher"]
//        ["anubhav" , "18-11-2000", 7049246810, "bina", "Teacher"]
// ];
// fd.forEach((element) =>{
//     console.log(item);

// })

let FData = [
  {
    name: "Rahul Sharma",
    dob: "1995-03-12",
    phone: "9876543210",
    city: "Bhopal",
    profession: "Software Engineer",
  },
  {
    name: "Amit Verma",
    dob: "1990-07-25",
    phone: "9123456780",
    city: "Indore",
    profession: "Doctor",
  },
  {
    name: "Suresh Gupta",
    dob: "1988-11-05",
    phone: "9988776655",
    city: "Delhi",
    profession: "Teacher",
  },
  {
    name: "Vikas Yadav",
    dob: "1993-01-18",
    phone: "9765432109",
    city: "Mumbai",
    profession: "Business Analyst",
  },
  {
    name: "Anil Kumar",
    dob: "1998-09-30",
    phone: "9456123789",
    city: "Pune",
    profession: "Graphic Designer",
  },
];

FData.forEach((item) => {
  console.log(item["name"]);
});
console.log(FData);

console.log(FData[0]["name"]);

let vishal = [
  {
    name: "Anil Kumar",
    dob: "1998-09-30",
    phone: "9456123789",
    city: "Pune",
    profession: "Engineer",
  },
];

console.log(Object.keys(vishal));
console.log(Object.values(vishal));
console.log(Object.entries(vishal));

let ar = [22, 43, 6, 43, 5, , 3, 6, 8, , 4, 333, 6, 5, 33];
ar.sort((a, b) => a - b);
console.log(ar);

console.log(ar.find((val) => val > 20));
console.log(ar.find((val) => val === 33));
console.log(ar.findIndex((val) => val === 33));
console.log(ar.findLastIndex((val) => val === 6));

let ar2 = [22, 43, 6, 43, 5, , 3, 6, 8, , 4, 333, 6, 5, 33];
console.log(ar2.filter((val) => val > 20));

console.log(ar2.find((val) => val > 20));

console.log(ar2.slice(0, 7));

let ab = "This is Web development";
console.log(ab);

console.log(ab.split(" "));
console.log(ab.split("_"));

let str = "this is String";

console.log(str.charAt(5));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let a = 3.14;
console.log(a);
console.log(typeof a);
let b = a.toString ();
console.log(b);

let c =3.1478588555555885;
console.log(c.toFixed(5));
