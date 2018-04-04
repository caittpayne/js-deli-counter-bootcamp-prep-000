function takeANumber(katzDeliLine, name) {
  const katzDeli = [];
  katzDeli.push(katzDeliLine, name);
  
  return (`Welcome, ${name}. You are number ${katzDeli.length + 1} in line.`)
}