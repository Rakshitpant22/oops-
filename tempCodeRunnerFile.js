let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1" : "USA",
  "another code": "turkey",
  sd: "england"
};
for (let code in codes) {
  console.log(code , codes[code]); 
}

let a ="41";
codes.a="INDIA"; // . operator always works with simple variable name not with " "; // if present as normal it would update otherwise add new key value pair
console.log(codes); 