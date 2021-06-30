// 1 var x=window.prompt()
// console.log(x);


// 2 var x=window.prompt("Enter number")


// if(x%3==0 ){
//     console.log("YES");
// }
// else if(x%4==0){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }


// 3 var x=window.prompt("Enter fisrt number")
// var y=window.prompt("Enter second number")

// if(x>y){
//     console.log(x);
// }
// else{ 
//     console.log(y);
// }


// 4 var x=window.prompt("Enter number")
// if(x>0){
//     console.log("Positive");
// }
// else{
//     console.log("Negative");
// }


// 5 var x=window.prompt("Enter first number")
// var y=window.prompt("Enter second number")
// var z=window.prompt("Enter third number")

// if( x>y && x>z &&  y<z ){
//     console.log("Max element=" +x);
//     console.log("Min element=" +y);
// } else if(x>y && x>z && z<y){
//     console.log("Max element=" +x);
//     console.log("Min element=" +z);
// } else if ( y>x && y>z && x<z){
//     console.log("Max element=" +y);
//     console.log("Min element=" +x);
// }else if ( y>x && y>z && x>z){
//     console.log("Max element=" +y);
//     console.log("Min element=" +z);
// }else if ( z>x&& z>y && x<y ){
//     console.log("Max element=" +z);
//     console.log("Min element=" +x);
// }else if ( z>x&& z>y && x>y ){
//     console.log("Max element=" +z);
//     console.log("Min element=" +y);
// }


// 6 var x=window.prompt("Enter number")

// if(x%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// 8 var x=window.prompt("Enter character")
// if(x=="a" || x=="e" || x=="i"|| x=="o" || x=="u" ){
//     console.log("vowel");
// }
// else{
//     console.log("Consonant");
// }


// 9 var x=window.prompt("Enter number")

// for(i=1;i<=x;i++){
//     console.log(i);
// }

// 10 var x=window.prompt("Enter number")
// for(i=1;i<=12;i++)
// {
//     console.log(i*x);
// }

// 11 var x=window.prompt("Enter number")

// for(i=1;i<=x;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// 12 var x=window.prompt("Enter number")
// var y=window.prompt("Enter number")
// var pow=1
// for(i=1;i<=y;i++){

//     pow=pow*x


// }
// console.log(pow);






// 12 var sum=0
// for(var i=0;i<5;i++){
//     var x= Number(window.prompt())
//     sum+=x
// }
// console.log(sum);


// var num1, num2, opp;
// num1=Number(window.prompt("num1")),
// num2=Number(window.prompt("num2")),
// opp=window.prompt("num1");

// switch (opp) {
//     case "+":
//         var res = num1 + num2;
//         break;
//     case "-":
//         var res = num1 - num2;
//         break;
//     case "*":
//         var res = num1 * num2;
//         break;
//     case "/":
//         if (num2 != 0) {
//             var res = num1 / num2;
//         }
//         else {
//             alert("dwkjcb");

//         }
//         break;
//     default: {
//         alert("ewklcndlF")
//     }
// }
// console.log(res);





































// var num, numb, ope;
// num = Number(window.prompt("1"));
// numb = Number(window.prompt("1"));
// ope = window.prompt("op");

// switch (ope) {

//     case "+":
//         result = num + numb;
//         break;
//     case "-":
//         result = num - numb;
//         break;
//     case "*":
//         result = num * numb;
//         break;
//     case "/":
//         if (numb != 0) {
//             result = num / numb;
//         } else {
//             alert("error")
//         }
//         break;
//         default:{
//             alert("vbnm,")
//         }
// }
// console.log(result);
















// var client ={
//     name:"ali",
//     age:25,
//     gender:"male",
//     job : {
//         name:"student" ,
//         time: 8,
//     },
//     sayWelcome: function (){
//         console.log("hiiiiiiiiiiiiiiiiii");
//     }
// }
// client.sayWelcome()


var col1= "red"
var col2="green"
var col3="blue"

var color =['red', 'green', 'blue', 'yelo', 'pink']
for(i=0;i<5;i++){
    console.log(color[i]);
}