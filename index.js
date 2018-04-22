// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(el,i,arr) { console.log(el.name); });
}

function logDriversByHometown(drivers, hometown){
  return drivers.forEach(function(el,i,arry) { if el.hometown === hometown {console.log(el.name); } });
}
