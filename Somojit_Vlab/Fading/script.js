function simulate() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Generate random fading values
    var fadingValues = generateFadingValues(canvas.width);
    
    // Draw fading curve on canvas
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    for (var i = 0; i < fadingValues.length; i++) {
        var x = i;
        var y = canvas.height / 2 - fadingValues[i] * canvas.height / 2;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function generateFadingValues(length) {
    var fadingValues = [];
    for (var i = 0; i < length; i++) {
        var fadingValue = Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
        fadingValues.push(fadingValue);
    }
    return fadingValues;
}
