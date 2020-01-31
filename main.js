let fs = require('fs');
let options = {
  flags: 'a',     // append模式
  encoding: 'utf8',  // utf8编码
};
let stdout = fs.createWriteStream('./mynotes.txt', options);
// 创建logger
let logger = new console.Console(stdout);

// 时间戳转换
function getLocalTime(nS) {     
   return new Date(parseInt(nS)*1).toLocaleString().replace(/:\d{1,2}$/,' ');     
}

var jsonObj = require('./mi_notes.json'); 
// console.log(jsonObj); 
logger.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
logger.log("+ 本次导出共"+jsonObj.length+"条数据");
logger.log("+ 导出内容为序号、创建时间、修改时间、内容在两行**之间");
var today = Date.now();
logger.log("+ 导出时间:"+getLocalTime(today));
logger.log("+ Github地址:https://github.com/wbxl2000/MICLOUD_NOTES_BACKUP");
logger.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
for(var i in jsonObj) {
	logger.log("------------------------------------------------");
	logger.log("序号:"+i);
	logger.log("\n创建时间:"+getLocalTime(jsonObj[i].createDate)+"\n修改时间:"+getLocalTime(jsonObj[i].modifyDate));
	logger.log("\n内容---Start:\n**");
	logger.log(jsonObj[i].snippet);
	logger.log("**\n内容---End\n");
}
