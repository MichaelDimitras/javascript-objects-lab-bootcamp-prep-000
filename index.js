var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  return obj.assign(k,v);
}


function destructivelyUpdateObjectWithKeyAndValue(o,k,v){
  o[k] = v;
  return o;
}


function deleteFromObjectByKey(obj, k){
  var temp = obj.assign({}, obj);
  delete temp[k];
  return temp;
}

function destructivelyDeleteFromObjectByKey(obj,k){
  delete obj[k];
  return obj;
}
