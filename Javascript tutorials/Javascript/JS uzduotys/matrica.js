function matrixGenerator(arraySize) {
    // Lets generate array big as arraySize of very random numbers from 1 to 10
    let arrayRandom = [];
    for(var i=0; i < arraySize; i++) {
        arrayRandom.push(Math.ceil(Math.random()*10));
        console.log (`mtrxGen ${i}:   ${arrayRandom[i]} `);
    }
    // Lets parse array of random numbers from 1 to 10
    console.log(`\n Parse array:`);
    for(var i=0; i < arraySize; i++) {
        // The program must also bypass every index divided by 5 (using continue).
        if (i%5 == 0) continue;
        // output of every even value 
        if (arrayRandom[i]%2 == 0) console.log (`mtrxGen even at ${i}:   ${arrayRandom[i]} `);
        // Additionally, the program must stop after value of 1 was found (using break).
        if (arrayRandom[i] == 1) {
            console.log (`mtrxGen found 1 at ${i}:   ${arrayRandom[i]} `);
            break;
        }
    }
    console.log (`mtrxGen finished work `);
}
matrixGenerator (20);