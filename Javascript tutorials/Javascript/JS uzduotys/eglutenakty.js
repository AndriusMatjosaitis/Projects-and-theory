function christmasTreeByNight(numOfColumns) {
    // declaration
    let christmasTree = '';
    let star = '*';
    let space = ' ';

    function addFullRow(){
        for (let firstRow = 0; firstRow < (numOfColumns * 2 + 1); firstRow++) {
            christmasTree += star;
        }
    }

    function addNewLine(){
        christmasTree += '\n'; 
    }

    function addDecentNoOfStars(row){
        for (let j = 0; j < (numOfColumns - row); j++) {
            christmasTree += star;
        }
    }

    //program
    addFullRow();
    addNewLine();

    for (let i = 0; i <= numOfColumns; i++) {
        addDecentNoOfStars(i);

        for (let j = 0; j <= i*2; j++) {
            christmasTree += space;
        }

        addDecentNoOfStars(i);

        if(i !== numOfColumns-1){
            addNewLine();
        }
    }

    addFullRow();

    console.log(christmasTree);
}

christmasTreeByNight(10);