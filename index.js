function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return ('Welcome, '+ name + '. You are number '+ katzDeliLine.length +' in line.')
}

function nowServing(katzDeliLine) {
  
  return (`Currently serving ${katzDeliLine[0]}.`)
  
  if(katzDeliLine.length > 0) {
    katzDeliLine.shift();
    
  }
  
  else{
    return('There is nobody waiting to be served!')
  }
}