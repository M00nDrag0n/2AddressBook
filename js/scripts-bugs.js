// This is Practice, Anise




function Bugs( type, wings, antennae, size, color, legAmount) {
  this.type = type;
  this.wings = wings;
  this.antennae = antennae;
  this.size = size;
  this.color = color;
  this.legAmount = legAmount;
};


Bugs.prototype.taxonomy = function() {
  return this.type + ", " + this.wings + ", " + this.antennae + ", " + this.size + ", " + this.color;
};

var leafhopper = new Bugs("insect","covered wings", "short antennae",  "tiny", "green", "6 legs" );
var blisterBeetle = new Bugs("insect", "shelled wings", "medium antennae",  "medium", "red and back", "6 legs");
var longhornBeetle = new Bugs("insect", "shelled wings", "long antennae", "large", "black and white", "6 legs");
var cellarSpider = new Bugs("arachnid", "no wings", "no antennae", "small", "brown and grey", "8 legs");
var barkScorpion = new Bugs("arachnid", "no wings", "no antennae", "medium", "pale brown and yellow", "8 legs");
// in console, if you type the name of the variable (in this case leafhopper), add .(insert after "this" like so: leafhopper.color), it will return "green".
// Ex: blisterBeetle.legAmount
// --> 6
// blisterBeetle.taxonomy();
//  --> medium red and black insect
// bugEncyclopedia.Bugs[0].type;
//  [leafhopper] --> "insect"



$(document).ready(function(){


});
