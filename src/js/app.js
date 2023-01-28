const button = document.querySelector('[data-element="buttonAlert"]')
function buttonClicker(params){
    console.log(params)
    alert("Hello World!")
}




// let star =""
// let string =""
// for (let i=1; i < 8; i++) {
//     star = ""
//     for (let j = 0; j < i; j++) {
//         star += "*"
//     }



//     string += star + "\n"
    
// }
// console.log(string)


let string = "";
for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


