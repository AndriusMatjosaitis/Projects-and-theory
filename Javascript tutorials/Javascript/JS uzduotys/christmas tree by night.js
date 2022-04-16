function christmasTreeByNight(x) {
    if ((x < 5) || (x % 2 === 0)) {
        console.log('Eglutės aukštis turi būti nelyginis kaičius nemažesnis už 5');
        return;
    }
    var treeWidth = 2 * (x - 1) - 1;
    var treeWidthHalfPlus1 = (treeWidth - 1) / 2 + 1;
    var line = '';
    for (i = 0; i < x; i++) {
        line = '';
        if ((i === 0) || (i === x - 1)) {
            for (j = 0; j < treeWidth; j++) {
                line += '*';
            }
            console.log(line);
        } else {
            for (j = 0; j < treeWidthHalfPlus1 - i; j++) {
                line += '*';
            }
            for (j = 0; j < 2 * i - 1; j++) {
                line += ' ';
            }
            for (j = 0; j < treeWidthHalfPlus1 - i; j++) {
                line += '*';
            }
            console.log(line);
        }
    }
}