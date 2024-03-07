                            // SHALLOW COPY
// const arr= [2, 3, 5, 6]
// art=arr
// console.log(art)
// arr[1]= 20
// console.log(arr)
                            // SHALLOW COPY
// const arr=[4, 8, 6, 5]
// const ary=[...arr]
// console.log(arr,ary)
// arr[3]=23
// console.log(arr,ary)
                            //  DEEP COPY
// const arr=[[2,3],[4,7]]
// const are = JSON.parse(JSON.stringify(arr))
// console.log(arr)
// console.log(are)
// arr[0][0]= 45
// console.log(arr)
// console.log(are)
                           //   Destructuring
// const arr=[4, 5, 6]
// let [a, b, c]= arr
// console.log(a, b, c)
                           //   forEach array
// const arr= [4, 5, 6, 9]
// arr.forEach((e) => console.log(e))
                           //  sum of array elements
// const arr= [4, 5, 9, 8]
// let total = 0
// arr.forEach((x) => total += x)
// console.log(total)

// function factorial(x){
//     if (x<=1)
//     return 1;
// return x* factorial(x-1);
// }
// try{
//     const ans= factorial(5000000000000000)
//     console.log(ans);
// }
// catch (err){
//     console.log(err.message)
// }
// function sqrt(x){
//     if (x < 0){
//         throw "Negative Number"
//     }
//     return x**0.5
// }
// try{
//     const ans= sqrt(-8)
// console.log(ans);
// }
// catch(err){
//     console.log(err)
// }

    // function grade(sc) {
    //     if (sc < 0 || sc > 100){
    //     throw "Invalid";
    //     } else{
    //     console.log("F")
    //   } else if (sc >= 70) {
    //     console.log("D")
    //   } else if (sc >= 80) {
    //     console.log("C")
    //   } else if (sc >= 90) {
    //     console.log("B")
    //   } else if (sc >= 100) {
    //     console.log("A")
    //   }
    // }
    //   try{
    //     grade[100]  
    //   }
    //   catch (err){
    //     console.log(err)
    //   }
                                // Questions/Answers   28/02/2024
    // const arr= ["BA", "XM", "RG", "DA"]
    // console.log(arr.filter(x => !x.includes("A")))
    // const arr= ["Miss Paramjeet Kaur", "Mr Ajay Kumar", "Mr Parampreet Singh", "Miss Isha Rani"]
    // console.log(arr.filter(x => x.includes("Param")))
    
// function removeSpaces(spr){
//   return spr.replace(/\s/g,"");
// }
//     const seq = "AP BP HP";
//     const ans = removeSpaces(seq);
//     console.log(ans)



// st = "AXMAG"
// let cht= 0
// for ( const ch of st){
//   if (ch ==="A") cht ++;
// }
// function sumDigit(st){
//   return sumDigit
// }
// console.log(cht)


                              //  femela age average
// const name= ["Mr X", "Miss Y", "Mr G", "Miss M"]
// age= [23, 27, 24, 28]
// let=[total, cnt]=[0,0];
// for(let i=0; i< name.length;i++){
// if (name[i].startsWith("Miss")){
//   total+=age[i];
//   cnt++
// }
// }
// console.log(total/cnt)

