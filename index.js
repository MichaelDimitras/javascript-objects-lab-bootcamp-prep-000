var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  return Object.assign(obj, {k,v});
}


function destructivelyUpdateObjectWithKeyAndValue(obj,k,v){
  o[k] = v;
  return o;
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
