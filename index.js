var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  var tmp = {[k]:v}
  return Object.assign(obj, {'cas':'asd'});
}


function destructivelyUpdateObjectWithKeyAndValue(obj,k,v){
  obj[k] = v;
  return obj;
}


function deleteFromObjectByKey(obj, k){
  var temp = Object.assign({}, obj);
  delete temp[k];
  return temp;
}

function destructivelyDeleteFromObjectByKey(obj,k){
  delete obj[k];
  return obj;
}
