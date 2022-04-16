function rgb2hex(r, g, b) {
    try {
        var rHex = parseInt(r).toString(16).padStart(2, '0');
        var gHex = parseInt(g).toString(16).padStart(2, '0');
        var bHex = parseInt(b).toString(16).padStart(2, '0');
    } catch (e) {
        return false;
    }
    if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) return false;
    return '#' + rHex + gHex + bHex;
}

function convertRGBtoHEX() {
    var input = document.getElementById('rgb-input').value.split(',');
    if (input.length === 3) {
      var output = rgb2hex(input[0], input[1], input[2]);
      if (output === false) {
        return alert('Enter input in format x,x,x where x is a number between 0-255');
      }
      return (document.getElementById('hex-value').value = rgb2hex(input[0], input[1], input[2]));
    }
    return alert('Enter input in format x,x,x where x is a number between 0-255');
  }