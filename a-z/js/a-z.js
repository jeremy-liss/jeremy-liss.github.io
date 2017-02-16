var result = "";

var things = {
  97: "Ant Colony",
  98: "Bungled Attempt at Tiramisu",
  99: "Crumbs at Bottom of Otherwise Empty Biscuit Tin",
  100: "Dated Crockery",
  101: "Emotionally Charged Discussion About the Dishes",
  102: "Frankfurter Casings",
  103: "Grey Power Meeting",
  104: "Hope (RE: Expired milk I Just Drank)",
  105: "Indiscreet Landlady",
  106: "Judge Judy",
  107: "Kranskis",
  108: "Loss of Limb",
  109: "Moist Towelette",
  110: "No Dinner",
  111: "Old Piece of Ham",
  112: "Pistachio Husks",
  113: "Quiet Sobbing",
  114: "Race Against Time",
  115: "Spatula, Burnt",
  116: "Thoughts etc.",
  117: "Underwhelmed Dinner Guests",
  118: "Vibraphone Classics Vol. II (On Stereo)",
  119: "Wine Biscuits",
  120: "Xenophobic Uncle",
  121: "Youthful Reminiscences",
  122: "Zane, Billy",
};

document.addEventListener('keypress', display)

function display(e) {
  if (e.which > 96){
    result = things[e.which];
  }
  else {
    result = "Press a Letter";
  }
  change()
};

function change(){
document.getElementById("az").innerHTML = result;
};
