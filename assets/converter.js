document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function () {
    
    document.getElementById('output').style.visibility = 'visible';

    let lbs = event.target.value;
    
    // convert to grams
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;

    // convert to kilograms
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;

    // convert to ounces
    document.getElementById('ozOutput').innerHTML = lbs*16;
})