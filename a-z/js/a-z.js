var result = "";
var num = 0;

document.addEventListener('keypress', display)

function display(e) {

  num = e.which;

  switch (num){
    case 113:
      result = "Quiet Sobbing"
      break;
    case 119:
      result = "Wine Biscuits"
      break;
    case 101:
      result = "Emotionally Charged Discussion About the Dishes"
      break;
    case 114:
      result = "Race Against Time"
      break;
    case 116:
      result = "Thoughts etc."
      break;
    case 121:
      result = "Youthful Reminiscences"
      break;
    case 117:
      result = "Underwhelmed Dinner Guests"
      break;
    case 105:
      result = "Indiscreet Landlady"
      break;
    case 111:
      result = "Old Piece of Ham"
      break;
    case 112:
      result = "Pistachio Husks"
      break;
    case 97:
      result = "Ant Colony"
      break;
    case 115:
      result = "Spatula, Burnt"
      break;
    case 100:
      result = "Dated Crockery"
      break;
    case 102:
      result = "Frankfurter Casings"
      break;
    case 103:
      result = "Grey Power Meeting"
      break;
    case 104:
      result = "Hope (RE: Expired milk I Just Drank)"
      break;
    case 106:
      result = "Judge Judy"
      break;
    case 107:
      result = "Kranskis"
      break;
    case 108:
      result = "Loss of Limb"
      break;
    case 122:
      result = "Zane, Billy"
      break;
    case 120:
      result = "Xenophobic Uncle"
      break;
    case 99:
      result = "Crumbs at Bottom of Otherwise Empty Biscuit Tin"
      break;
    case 118:
      result = "Vibraphone Classics Vol. II (On Stereo)"
      break;
    case 98:
      result = "Bungled Attempt at Tiramisu"
      break;
    case 110:
      result = "No Dinner"
      break;
    case 109:
      result = "Moist Towelette"
      break;
    default:
      result = "Press a Letter"
  }
  change()
};

function change(){
document.getElementById("az").innerHTML = result;
}
