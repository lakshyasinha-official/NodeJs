function calculateTime(n) {
    let start_time = new Date();
    let sum =0 ; 
    for(let i =1; i<=n;i++){
        sum = sum+i;
    }
    let last_time = new Date();
    console.log(start_time+"    "+last_time);

    return last_time.getSeconds()-start_time.getSeconds();
}

module.exports = calculateTime