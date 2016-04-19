//hard coded values

var planets = ["Sun", "Mercury", "Venus", "Earth", "Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
var weightMultiples = [27.9, 0.377, 0.9032, 1, 0.1655, 0.3895, 2.640, 1.139, 0.917, 1.148, 0.06];



//populate the field 
for(var i = 0; i < planets.length; i++)
{ 
  var option = document.createElement("option");
  option.text = planets[i];
  option.value = weightMultiples[i];
  var select = document.getElementById("dropdown");
  select.appendChild(option);
}


//findWeight function finds the weight and outputs the result of the calculation to the p element
function findWeight()
{
  //set weight value
  var weight = document.getElementsByName("userWeight")[0].value;
  
  //target dropdown element
  var choice = document.getElementById("dropdown");
  
  //set values that are selected in the dropdown
  var multiple = choice.options[choice.selectedIndex].value;
  var planet = choice.options[choice.selectedIndex].text; 
  
  //do the calculation in question
  var operation = weight * multiple;
  
  //target element we want to output in
  var outputElement = document.getElementById("output");
  
  //output uses if statement because if the planet is sun, it sounds better adding The before it. could also just change array.
  if(planet != planets[0])
  {
  outputElement.innerHTML = "You would weigh "+operation+" on "+planet;
  }
  else 
  {
    outputElement.innerHTML = "You would weigh "+operation+" on the "+planet;
  }
    

}

