
module.exports = function(str, separator) {
  var strArray = str.split(separator || '_');
  var humpStr = strArray[0];
  for (var i = 1, l = strArray.length; i < l; i+=1) {
  	humpStr += strArray[i].slice(0, 1).toUpperCase() + strArray[i].slice(1);
  }
  return humpStr;
}
