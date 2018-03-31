var message;
var a;
var text;

$(".check").click(function(){
  
  a = $("#message").val();
  message = a.split("");
  console.log(message);
  
  if($(".binary").is(":checked")){
    binary();
  }
  
  if($(".hexa").is(":checked")){
    hexa();
  }
  
  if($(".octal").is(":checked")){
    octal();
  }
  
});

function binary(){
  
  for( var i = 0; i < message.length; i++ ){
  switch(message[i]){
      
      // lower Case binary      
    case "a":
      text = "01100001";
      break;
    case "b":
      text = "01100010";
      break;
    case "c":
      text = "01100011";
      break;
    case "d":
      text = "01100100";
      break;
    case "e":
      text = "01100101";
      break;
    case "f":
      text = "01100110";
      break;
    case "g":
      text = "01100111";
      break;
    case "h":
      text = "01101000";
      break;
    case "i":
      text = "01101001";
      break;
    case "j":
      text = "01101010";
      break;
    case "k":
      text = "01101011";
      break;
    case "l":
      text = "01101100";
      break;
    case "m":
      text = "01101101";
      break;
    case "n":
      text = "01101110";
      break;
    case "o":
      text = "01101111";
      break;
    case "p":
      text = "01110000";
      break;
    case "q":
      text = "01110001";
      break;
    case "r":
      text = "01110010";
      break;
    case "s":
      text = "01110011";
      break;
    case "t":
      text = "01110100";
      break;
    case "u":
      text = "01110101";
      break;
    case "v":
      text = "01110110";
      break;
    case "w":
      text = "01110111";
      break;
    case "x":
      text = "01111000";
      break;
    case "y":
      text = "01111001";
      break;
    case "z":
      text = "01111010";
      break;
      
      // Upper case binary     
    case "A":
      text = "01000001";
      break;
    case "B":
      text = "01000010";
      break;
    case "C":
      text = "01000011";
      break;
    case "D":
      text = "01000100";
      break;
    case "E":
      text = "01000101";
      break;
    case "F":
      text = "01000110";
      break;
    case "G":
      text = "01000111";
      break;
    case "H":
      text = "01001000";
      break;
    case "I":
      text = "01001001";
      break;
    case "J":
      text = "01001010";
      break;
    case "K":
      text = "01001011";
      break;
    case "L":
      text = "01001100";
      break;
    case "M":
      text = "01001101";
      break;
    case "N":
      text = "01001110";
      break;
    case "O":
      text = "01001111";
      break;
    case "P":
      text = "01010000";
      break;
    case "Q":
      text = "01010001";
      break;
    case "R":
      text = "01010010";
      break;
    case "S":
      text = "01010011";
      break;
    case "T":
      text = "01010100";
      break;
    case "U":
      text = "01010101";
      break;
    case "V":
      text = "01010110";
      break;
    case "W":
      text = "01010111";
      break;
    case "X":
      text = "01011000";
      break;
    case "Y":
      text = "01011001";
      break;
    case "Z":
      text = "01011010";
      break;
      
      // special case binary     
    case " ":
      text = " ";
      break;
    case "!":
      text = "00100001";
      break;
    case '"':
      text = "00100010";
      break;
    case "#":
      text = "00100011";
      break;
    case "$":
      text = "00100100";
      break;
    case "%":
      text = "00100101";
      break;
    case "&":
      text = "00100110";
      break;
    case "'":
      text = "00100111";
      break;
    case "(":
      text = "00101000";
      break;
    case ")":
      text = "00101001";
      break;
    case "*":
      text = "00101010";
      break;
    case "+":
      text = "00101011";
      break;
    case ",":
      text = "00101100";
      break;
    case "-":
      text = "00101101";
      break;
    case ".":
      text = "00101110";
      break;
    case "/":
      text = "00101111";
      break;
    case "0":
      text = "00110000";
      break;
    case "1":
      text = "00110001";
      break;
    case "2":
      text = "00110010";
      break;
    case "3":
      text = "00110011";
      break;
    case "4":
      text = "00110100";
      break;
    case "5":
      text = "00110101";
      break;
    case "6":
      text = "00110110";
      break;
    case "7":
      text = "00110111";
      break;
    case "8":
      text = "00111000";
      break;
    case "9":
      text = "00111001";
      break;
    case ":":
      text = "00111010";
      break;
    case ";":
      text = "00111011";
      break;
    case "<":
      text = "00111100";
      break;
    case "=":
      text = "00111101";
      break;
    case ">":
      text = "00111110";
      break;
    case "?":
      text = "00111111";
      break;
    case "@":
      text = "01000000";
      break;
    case "[":
      text = "01011011";
      break;
    case '\\':
      text = "01011100";
      break;
    case "]":
      text = "01011101";
      break;
    case "^":
      text = "01011110";
      break;
    case "_":
      text = "01011111";
      break;
    case "`":
      text = "01100000";
      break;
    case "{":
      text = "01111011";
      break;
    case "|":
      text = "01111100";
      break;
    case "}":
      text = "01111101";
      break;
    case "~":
      text = "01111110";
      break;
      
      // default
    default:
      
  }
  $(".print").append(text + " ");
}
  
}

function hexa(){
 
  for( var i = 0; i < message.length; i++ ){
  switch(message[i]){
      
      // lower Case binary      
    case "a":
      text = "61";
      break;
    case "b":
      text = "62";
      break;
    case "c":
      text = "63";
      break;
    case "d":
      text = "64";
      break;
    case "e":
      text = "65";
      break;
    case "f":
      text = "66";
      break;
    case "g":
      text = "67";
      break;
    case "h":
      text = "68";
      break;
    case "i":
      text = "69";
      break;
    case "j":
      text = "6A";
      break;
    case "k":
      text = "6B";
      break;
    case "l":
      text = "6C";
      break;
    case "m":
      text = "6D";
      break;
    case "n":
      text = "6E";
      break;
    case "o":
      text = "6F";
      break;
    case "p":
      text = "70";
      break;
    case "q":
      text = "71";
      break;
    case "r":
      text = "72";
      break;
    case "s":
      text = "73";
      break;
    case "t":
      text = "74";
      break;
    case "u":
      text = "75";
      break;
    case "v":
      text = "76";
      break;
    case "w":
      text = "77";
      break;
    case "x":
      text = "78";
      break;
    case "y":
      text = "79";
      break;
    case "z":
      text = "7A";
      break;
    case " ":
      text = "20";
      break;
      
      // Upper case binary     
    case "A":
      text = "41";
      break;
    case "B":
      text = "42";
      break;
    case "C":
      text = "43";
      break;
    case "D":
      text = "44";
      break;
    case "E":
      text = "45";
      break;
    case "F":
      text = "46";
      break;
    case "G":
      text = "47";
      break;
    case "H":
      text = "48";
      break;
    case "I":
      text = "49";
      break;
    case "J":
      text = "4A";
      break;
    case "K":
      text = "4B";
      break;
    case "L":
      text = "4C";
      break;
    case "M":
      text = "4D";
      break;
    case "N":
      text = "4E";
      break;
    case "O":
      text = "4F";
      break;
    case "P":
      text = "50";
      break;
    case "Q":
      text = "51";
      break;
    case "R":
      text = "52";
      break;
    case "S":
      text = "53";
      break;
    case "T":
      text = "54";
      break;
    case "U":
      text = "55";
      break;
    case "V":
      text = "56";
      break;
    case "W":
      text = "57";
      break;
    case "X":
      text = "58";
      break;
    case "Y":
      text = "59";
      break;
    case "Z":
      text = "5A";
      break;
      
      // special case binary     
    case " ":
      text = " ";
      break;
    case "!":
      text = "21";
      break;
    case '"':
      text = "00100010";
      break;
    case "#":
      text = "00100011";
      break;
    case "$":
      text = "00100100";
      break;
    case "%":
      text = "00100101";
      break;
    case "&":
      text = "00100110";
      break;
    case "'":
      text = "00100111";
      break;
    case "(":
      text = "00101000";
      break;
    case ")":
      text = "00101001";
      break;
    case "*":
      text = "00101010";
      break;
    case "+":
      text = "00101011";
      break;
    case ",":
      text = "00101100";
      break;
    case "-":
      text = "00101101";
      break;
    case ".":
      text = "00101110";
      break;
    case "/":
      text = "00101111";
      break;
    case "0":
      text = "00110000";
      break;
    case "1":
      text = "00110001";
      break;
    case "2":
      text = "00110010";
      break;
    case "3":
      text = "00110011";
      break;
    case "4":
      text = "00110100";
      break;
    case "5":
      text = "00110101";
      break;
    case "6":
      text = "00110110";
      break;
    case "7":
      text = "00110111";
      break;
    case "8":
      text = "00111000";
      break;
    case "9":
      text = "00111001";
      break;
    case ":":
      text = "00111010";
      break;
    case ";":
      text = "00111011";
      break;
    case "<":
      text = "00111100";
      break;
    case "=":
      text = "00111101";
      break;
    case ">":
      text = "00111110";
      break;
    case "?":
      text = "00111111";
      break;
    case "@":
      text = "01000000";
      break;
    case "[":
      text = "01011011";
      break;
    case '\\':
      text = "01011100";
      break;
    case "]":
      text = "01011101";
      break;
    case "^":
      text = "01011110";
      break;
    case "_":
      text = "01011111";
      break;
    case "`":
      text = "01100000";
      break;
    case "{":
      text = "01111011";
      break;
    case "|":
      text = "01111100";
      break;
    case "}":
      text = "01111101";
      break;
    case "~":
      text = "01111110";
      break;
      
      // default
    default:
      
  }
  $(".print").append(text + " ");
}
  
}

function octal(){
  
  for( var i = 0; i < message.length; i++ ){
  switch(message[i]){
      
      // lower Case binary      
    case "a":
      text = "141";
      break;
    case "b":
      text = "142";
      break;
    case "c":
      text = "143";
      break;
    case "d":
      text = "144";
      break;
    case "e":
      text = "145";
      break;
    case "f":
      text = "146";
      break;
    case "g":
      text = "147";
      break;
    case "h":
      text = "150";
      break;
    case "i":
      text = "151";
      break;
    case "j":
      text = "152";
      break;
    case "k":
      text = "153";
      break;
    case "l":
      text = "154";
      break;
    case "m":
      text = "155";
      break;
    case "n":
      text = "156";
      break;
    case "o":
      text = "157";
      break;
    case "p":
      text = "160";
      break;
    case "q":
      text = "161";
      break;
    case "r":
      text = "162";
      break;
    case "s":
      text = "163";
      break;
    case "t":
      text = "164";
      break;
    case "u":
      text = "165";
      break;
    case "v":
      text = "166";
      break;
    case "w":
      text = "167";
      break;
    case "x":
      text = "170";
      break;
    case "y":
      text = "171";
      break;
    case "z":
      text = "172";
      break;
      
      // Upper case binary     
    case "A":
      text = "101";
      break;
    case "B":
      text = "102";
      break;
    case "C":
      text = "103";
      break;
    case "D":
      text = "104";
      break;
    case "E":
      text = "105";
      break;
    case "F":
      text = "106";
      break;
    case "G":
      text = "107";
      break;
    case "H":
      text = "110";
      break;
    case "I":
      text = "111";
      break;
    case "J":
      text = "112";
      break;
    case "K":
      text = "113";
      break;
    case "L":
      text = "114";
      break;
    case "M":
      text = "115";
      break;
    case "N":
      text = "116";
      break;
    case "O":
      text = "117";
      break;
    case "P":
      text = "120";
      break;
    case "Q":
      text = "121";
      break;
    case "R":
      text = "122";
      break;
    case "S":
      text = "123";
      break;
    case "T":
      text = "124";
      break;
    case "U":
      text = "125";
      break;
    case "V":
      text = "126";
      break;
    case "W":
      text = "127";
      break;
    case "X":
      text = "130";
      break;
    case "Y":
      text = "131";
      break;
    case "Z":
      text = "132";
      break;
      
      // special case binary     
    case " ":
      text = " ";
      break;
    case "!":
      text = "00100001";
      break;
    case '"':
      text = "00100010";
      break;
    case "#":
      text = "00100011";
      break;
    case "$":
      text = "00100100";
      break;
    case "%":
      text = "00100101";
      break;
    case "&":
      text = "00100110";
      break;
    case "'":
      text = "00100111";
      break;
    case "(":
      text = "00101000";
      break;
    case ")":
      text = "00101001";
      break;
    case "*":
      text = "00101010";
      break;
    case "+":
      text = "00101011";
      break;
    case ",":
      text = "00101100";
      break;
    case "-":
      text = "00101101";
      break;
    case ".":
      text = "00101110";
      break;
    case "/":
      text = "00101111";
      break;
    case "0":
      text = "00110000";
      break;
    case "1":
      text = "00110001";
      break;
    case "2":
      text = "00110010";
      break;
    case "3":
      text = "00110011";
      break;
    case "4":
      text = "00110100";
      break;
    case "5":
      text = "00110101";
      break;
    case "6":
      text = "00110110";
      break;
    case "7":
      text = "00110111";
      break;
    case "8":
      text = "00111000";
      break;
    case "9":
      text = "00111001";
      break;
    case ":":
      text = "00111010";
      break;
    case ";":
      text = "00111011";
      break;
    case "<":
      text = "00111100";
      break;
    case "=":
      text = "00111101";
      break;
    case ">":
      text = "00111110";
      break;
    case "?":
      text = "00111111";
      break;
    case "@":
      text = "01000000";
      break;
    case "[":
      text = "01011011";
      break;
    case '\\':
      text = "01011100";
      break;
    case "]":
      text = "01011101";
      break;
    case "^":
      text = "01011110";
      break;
    case "_":
      text = "01011111";
      break;
    case "`":
      text = "01100000";
      break;
    case "{":
      text = "01111011";
      break;
    case "|":
      text = "01111100";
      break;
    case "}":
      text = "01111101";
      break;
    case "~":
      text = "01111110";
      break;
      
      // default
    default:
      
  }
  $(".print").append(text + " ");
}
  
}

$("#message").click(function(){
  $(".print").html("");
  $("#message").val("");
});

$(".binary").click(function(){
  $(".print").html("");
});

$(".hexa").click(function(){
  $(".print").html("");
});

$(".octal").click(function(){
  $(".print").html("");
});