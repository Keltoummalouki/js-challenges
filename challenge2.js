function reverseArr(arr){

    let i = 0 ; j = arr.length-1;
        while (i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i = i+1;
            j = j-1;
        }
        console.log(arr)
}



let arr = [1, 2, 3, 4, 5];
console.log(arr);
reverseArr(arr);
