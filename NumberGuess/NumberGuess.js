function getRandomIntInclusive(min, max) {
    //Taken from MDN Math.random() page
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  function newChosen() {
    //choose a new random integer between 1 and 100 inclusive
    //output chosen integer to output box id="chosen"
    randInt = getRandomIntInclusive(1,100);
    document.getElementById("chosen").value = randInt;
  }