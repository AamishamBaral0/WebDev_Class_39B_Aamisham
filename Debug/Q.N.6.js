// function countDown(n){
//     console.log(n);
//     return countDown(n-1);
// }













// The function keeps calling itself forever:





function countDown(n){
    if(n < 0){
        return;
    }

    console.log(n);
    return countDown(n - 1);
}