// 1- Write a program that allow to user enter number then print it

// var x= Number(prompt("enter a number"));
// console.log( "output " + x);




// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var x= Number(prompt("enter a number"));
// if(x%4==0 && x%3==0){
//     console.log("yes")
// }
// else 
// console.log("no")




// 3- Write a program that allows the user to insert 2 integers then print the max

// var x= Number(prompt(" enter first number"));
// var y= Number(prompt(" enter second number"));
// if (x>y){
//     console.log( x +" is greater")
// }
// else if (x<y) {
//     console.log( y +" is greater")
// }

// else if (x===y) {
//     console.log("numbers are equal")
// }




// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

//  var x= Number(prompt(" enter  number"));
// if (x>0){
//     console.log( x +" is positive");
// }
// else if (x<0) {
//     console.log( x +" is negative");
// }
// else {console.log("you entered zero")};




// 5- Write a program that take 3 integers from user then print the max element and the min element.

// var x= Number(prompt(" enter first number"));
// var y= Number(prompt(" enter second number"));
// var z= Number(prompt(" enter third number"));

// if (x>y && x>z){
//     console.log( x+" max element")
// }
// else if (y>x && y>z) {
//     console.log( y+" max element")
// }
// else if (z>x && z>y) {
//     console.log(z +" max element")
// }

// if (x<y && x<z){
//     console.log( x+" min element")
// }
// else if (y<x && y<z) {
//     console.log( y+" min element")
// }
// else if (z<x && z<y) {
//     console.log( z+" min element")
// }




// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

// var x= Number(prompt("enter a number"));
// if (x%2==0) {
//     console.log(" even number");
// }
// else {
//     console.log(" odd number");
// }





// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// var x= prompt("enter a char");
// if (x=="a" || x=="i" || x=="e" || x=="u" || x=="o" || x=="A" || x=="I" || x=="E" || x=="U" || x=="O"  ) {
//     console.log("vowel");

// }
// else {
//     console.log("consonant");
// }





// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// var x= Number(prompt("enter a number"));
// for (i=1; i<=x; i++) {
//     console.log(i);
// }





// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var x= Number(prompt("enter a number"));
// for (i=1; i<=12; i++) {
//     console.log(x*i);
// }




// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number

// var x=Number(prompt("enter a number"));
// for(i=1;i<=x;i++)
// {
//     if(i%2==0) {
//      console.log(i);  }
      
// }





// 12- Write a program that take two integers then print the power

// var x= Number(prompt("enter first number"));
// var y= Number(prompt("enter second number"));
// var output= Number(x**y);
// console.log("output " + output)





// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var s1 = Number(prompt("Enter 1st grade "));
// var s2 = Number(prompt("Enter 2nd grade "));
// var s3 = Number(prompt("Enter 3rd grade "));
// var s4 = Number(prompt("Enter 4th grade "));
// var s5 = Number(prompt("Enter 5th grade "));


// var total = s1 + s2 + s3 + s4 + s5;
// var average = total / 5;
// var percentage = (total / 500) * 100;


// console.log("total = "+ total);
// console.log("average = "+ average);
// console.log("percentage = "+ percentage);






// 13-Write a program to input month number and print number of days in that month.

// var month = Number(prompt("enter month number"));
// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
// {
//     console.log("31 days");
// }
// else if(month==4 || month==6 || month==9 || month==11)
// {
//     console.log("30 days");
// }
// else if(month==2)
// {
//     console.log("28 or 29 days");
// }
// else
// {
//     console.log("Please enter month number between (1-12).");
// }






// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// var phy = Number(prompt("Enter physics grade "));
// var chem = Number(prompt("Enter chemistry grade "));
// var bio = Number(prompt("Enter biology grade "));
// var math = Number(prompt("Enter math grade "));
// var comp = Number(prompt("Enter computer grade "));


//  var per = ((phy + chem + bio + math + comp) / 500)*100;

// console.log("percentage = "+per);

//     if(per >= 90)
//     {
//         console.log("Grade A");
//     }
//     else if(per >= 80)
//     {
//         console.log("Grade B");
//     }
//     else if(per >= 70)
//     {
//         console.log("Grade C");
//     }
//     else if(per >= 60)
//     {
//         console.log("Grade D");
//     }
//     else if(per >= 40)
//     {
//         console.log("Grade E");
//     }
//     else
//     {
//         console.log("Grade F");
//     }







// 15- Write a program to print total number of days in month

// var month= Number(prompt("Enter month number"))

// switch(month)
//     {
//         case 1: 
//         case 3: 
//         case 5: 
//         case 7: 
//         case 8: 
//         case 10: 
//         case 12: 
//            console.log("31 days");
//             break;
//         case 2:     
//             console.log("28 or 29 days");
//             break;
//          case 4:
//          case 6: 
//          case 9:
//          case 11: 
//            console.log("30 days");
//             break;
       
//         default: 
//         console.log(" Please enter month number between 1-12");

//     }







// 16- Write a program to check whether an alphabet is vowel or consonant

// var alphabet=prompt("Enter alphabet to check")


// switch(alphabet)
//   {
//     case 'a':
//     case 'A':
//     case 'e':
//     case 'E':
//     case 'i':
//     case 'I':
//     case 'o':
//     case 'O':
//     case 'u':
//     case 'U':
//  console.log("vowel");
//       break;
//     default:
//         console.log("consonant");
//     }              






// 17- Write a program to find maximum between two  number

// var num1 =Number(prompt("Enter first number"));
// var num2 =Number(prompt("Enter second number"));
// switch(num1 > num2)
//     {   
//         case true: 
//             console.log(num1);
//             break;

     
//         case false:
//             console.log( num2);
//             break;
            


//     }







// 18- Write a program to check whether a number is even or odd

// var num =Number(prompt("Enter a number"));
// switch(num % 2)
// {
//     case 0: 
//         console.log("Number is Even");
//         break;

//     case 1: 
//         console.log("Number is Odd");
//         break;
// }





// 19- Write a program to check whether a number is positive or negative or zero

//  var num =Number(prompt("Enter a number"));

// switch (num > 0)
//     {
//         case true:
//          console.log("number is positive");
//             break;

//         // Num is either negative or zero
//         case false:
//             switch (num < 0)
//             {
//                 case true: 
//                 console.log("number is nrgstive");
//                 break;

//                 case false:
//                 console.log("number is zero");
//                 break;
//             }
//     }






// 20- Write a program to create Simple Calculator

// var num1 = Number(prompt("Enter first number"));
// var operator = prompt("Enter operator");
// var num2 =Number(prompt("Enter second number"));

// switch(operator) {
//     case '+':
//     console.log(num1+num2);
//      break;

//      case '-':
//      console.log(num1-num2);
//      break;

//       case '*':
//       console.log(num1*num2);
//       break;

//       case '/':
//       console.log(num1/num2);
//        break;

//         default:
//         console.log('Invalid operator');
//         break;


// }



