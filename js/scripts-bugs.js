// This is Practice, Anise




function Bugs(size, color, legAmount, type) {
  this.size = size;
  this.color = color;
  this.legAmount = legAmount;
  this.type = type;
};


Bugs.prototype.taxonomy = function() {
  return this.size + " " + this.color + " " + this.type;
};

var leafhopper = new Bugs("tiny", "green", 6, "insect");
var blisterBeetle = new Bugs("medium", "red and back", 6, "insect");

// in console, if you type the name of the variable (in this case leafhopper), add .(insert after "this" like so: leafhopper.color), it will return "green".
// Ex: blisterBeetle.legAmount
// --> 6
// blisterBeetle.taxonomy();
//  --> medium red and black insect
// bugEncyclopedia.Bugs[0].type;
//  [leafhopper] --> "insect"



$(document).ready(function(){


});
