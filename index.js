var katzDeliLine = [];

function takeANumber (katzDeliLine,name) {
  katzDeliLine.push (name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
takeANumber(katzDeliLine, "Steven"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Blake"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Avi"); // "Welcome, Kent. You are number 3 in line."

<<<<<<< HEAD
function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
=======
function currentLine (katzDeliLine) {
  var line = []
  if (katzDeliLine.length ===0) {
    return "The line is currently empty."
  } else {
  for (var i = 0; i < katzDeliLine.length; i++) {
    line += (i + 1) + ". " + katzDeliLine[i] + ","
  }
  line = line.slice ( 0,  line.length -1)
  return "The line is currently:  " + line
>>>>>>> 0cfb0cee742e0415d01cd06db5d2b05d9e408b08
}
}
function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
