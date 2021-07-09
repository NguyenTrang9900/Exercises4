//Ex1: Viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
//   - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
//   - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
//   - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
//   Example: 
//   [1, -10, 5, 18, -9, 5] => 27

// function myFunction() {
//         let string = prompt("Nhập vào một chuỗi:");
//         if(string.indexOf("Java")===0)
//         {
//         console.log("Yes");}
//         else{
//         console.log("No");
//         }
// }
// myFunction();

// //Ex2:

// function findMaxDiff(number) {
    
//     if(number.length >=2){
//         let maxDiff=0;
//       for(let i=0;i<number.length;i++){
//         maxDiff=(maxDiff<Math.abs(number[i]-number[i-1]))? Math.abs(number[i]-number[i-1]): maxDiff;

//     }
//     return maxDiff;
//   }
//     else{
//     return 0;

//   }
// }
// console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));

//Ex3:viết hàm first trả về giá trị đầu tiên của mảng, 
/*nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng 
(hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.*/
// Tham số:
// - array: mảng gốc
// - n: số phần tử trả về

// function First(array, n) {
//    if (n===undefined){
//     return [array[0]];
//    }
//   else if(n<=0)
//   {
//     return "";
//   }
//    else if(n<=array.length)
//    {  
//       return array.slice(0,n);      
//    }
//    else {
//    return array;
//    }
//     }
// console.log(First("JavaScript is a scripting language",0));


// //Ex4: Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
//  Nếu có 1 số âm và một số dương thì trả về true. 
//  Các trường hợp khác trả về false. 
//  Số 0 là số không âm cũng không dương
//  Tham số:
//              - number1: số nguyên thứ nhất
//  - number2: số nguyên thứ hai

function checkInt(number1,number2) {
    
    if(number1*number2<0  )
      {
        return true;
      }
    else{
        return false;
      }
  }
 console.log(checkInt(-1,2));
 
// Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu số đó và 13, 
// nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
// Example: 
// n = 20 // return 14
// n = 5 // return 8
 
// function myFunction(n) {
//     let m =Math.abs(n-13)
//         if(n > 13)
//           {
//             return 2*m;
//           }
//         else{
//             return m;
//           }
//       }
//      console.log(myFunction(24));

// //Ex6:

// Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

// Input: là một dãy số.
// Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

// Ví dụ:

// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)

// function findMaxDiff(number) {
//     let max = 0;
//     for(let i=0;i<number.length-1;i++){
//       for ( let j = i+1;j<number.length;j++){
//         if ( max < Math.abs(number[i]-number[j])){
//           max = Math.abs(number[i]-number[j])
//         }
//       }
     
//   }
//   return max;

// }
// console.log(findMaxDiff([1, 2, 3, 8, 9]));