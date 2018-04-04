function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return ('Welcome, '+ name + '. You are number '+ katzDeliLine.length +' in line.')
}

function nowServing() {
  if(katzDeliLine.length > 0) {
    katzDeliLine.unshift();
  }
  
  else{
    return('there is nobody waiting to be served!')
  }
}