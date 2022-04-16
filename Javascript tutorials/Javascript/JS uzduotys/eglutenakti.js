function christmasTreeByNightGenerator (setHeight) {
    // Is Tree big enough?
    if (setHeight < 3) {
        console.log(Sorry, too little tree, U do not see it at night); 
        return;
    }
    let templateTree = ``;
    let templateNight = ``;
    // LETS MAKE NIGHT 
    // if setHeight is even, lets add one MORE NIGHT
    // BEWARE! PURE MAGIC
    setNight = (setHeight-2)*2+1;
    for (var i=0; i<setNight; i++) {
        templateNight = templateNight+`*`;
    }
    console.log(templateNight); 
    // Lets make tree
    templateTree = templateNight;
    for (var i=0; i<setHeight-2; i++) {
        templateTree = templateTree.split('');
        templateTree[Math.floor(setNight/2)-i] = ' ';
        templateTree[Math.floor(setNight/2)+i] = ' ';
        templateTree = templateTree.join('');
        console.log(templateTree);
     }
    // output Last Night 
    console.log(templateNight); 
}