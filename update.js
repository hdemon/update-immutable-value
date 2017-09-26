const update = (properties, originalObj) => {
  const cloned = Object.assign({}, originalObj);
  traverse(properties, cloned, (_property, originalProperty, key) => {
    originalProperty[key] = _property[key];
  });
  
  return cloned;
}

const traverse = (properties, originalProperties, callback) => {
  Object.keys(properties).forEach((key) => {
    if (isPrimitive(properties[key])) {
      return callback(properties, originalProperties, key);
    } else {
      traverse(properties[key], originalProperties[key], callback);
    }
  })
}

const isPrimitive = (value) => 
  value === null || (typeof value !== 'function' && typeof value !== 'object');

module.exports = update;
