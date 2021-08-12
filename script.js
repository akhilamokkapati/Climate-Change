/*Code for generating a script */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}


function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Greetings. My name is " + name + ". I am sending you this message to express my concerns about climate change. I, as an individual residing in " + location + " , am troubled by recent changes I've observed on the planet. I would like to suggest an idea of mine, it is- " + learning + ". It would be helpful if you would take immediate action upon understanding my concerns. It is important to solve the climate change issue.";
}

// Effects of climate change generator
var factList = [
  "Health risks through rising air temperatures and heatwaves.", 
  "Increasing spread of pests and pathogens.", 
  "Loss of biodiversity due to limited adaptability and adaptability speed of flora and fauna.", 
  "Ocean acidification due to increased HCO3 concentrations in the water as a consequence of increased CO₂ concentrations.", 
  "Higher ocean temperatures.", 
  "Shrinking glaciers.",
  "An increase in heavy precipitation.",
  "An increase in hunger and water crises, especially in developing countries."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
