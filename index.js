var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  return obj.assign(k,v);
}


function destructivelyUpdateObjectWithKeyAndValue(o,k,v){
  o[k] = v;
  return o;
}
