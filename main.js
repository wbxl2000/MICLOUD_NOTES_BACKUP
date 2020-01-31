	
function getLocalTime(nS) {     
   return new Date(parseInt(nS)*1).toLocaleString().replace(/:\d{1,2}$/,' ');     
}

var jsonObj = require('./mi_notes.json'); 
// console.log(jsonObj); 
for(var i in jsonObj) {
	console.log("------------------------------------------------");
	console.log("序号:"+i);
	console.log("\n创建时间:"+getLocalTime(jsonObj[i].createDate)+"\n修改时间:"+getLocalTime(jsonObj[i].modifyDate));
	console.log("\n内容---Start:");
	console.log(jsonObj[i].snippet);
	console.log("内容---End\n");
}
