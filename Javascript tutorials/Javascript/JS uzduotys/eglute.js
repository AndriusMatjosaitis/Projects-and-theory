function christmasTree(numOfColumns){
    let christmasTree = '';

    for(let i = 0; i <= numOfColumns; i++){
       for(let j = 0; j <= i; j++){
            christmasTree += '*';
       }     
       christmasTree += '\n';
    }
    console.log(christmasTree);
}

christmasTree(5);