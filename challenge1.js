function Sum(arr){

    if (arr.length >=3 )
    {
    let sort = arr.sort((a,b) => b-a);
    let [a,b,c] = sort;
    return a + b + c;
    }
    else
    {
        console.log("null")
    }
}
    arr = [23,33,3,1,44];
    console.log(Sum(arr));