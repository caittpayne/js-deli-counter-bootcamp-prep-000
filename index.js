function takeANumber(katzDeliLine, name) {
  const katzDeli = [];
  const otherDeli = [];
  katzDeli.push(katzDeliLine);
  otherDeli.push(name);
  
  return (`Welcome, ${name}. You are number ${katzDeli.length + otherDeli.length} in line.`)
}