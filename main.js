function getLocalTime(nS) {     
   return new Date(parseInt(nS)*1).toLocaleString().replace(/:\d{1,2}$/,' ');     
}
console.log(getLocalTime(1580449869755));
