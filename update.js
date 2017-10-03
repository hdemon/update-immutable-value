const update = (originalObj, properties) => {
  const cloned = Object.assign({}, originalObj);
  if (isPrimitive(originalObj) && isPrimitive(properties)) {
    return properties;
  }

  traverse(properties, cloned, (_properties, _cloned, key) => {
    _cloned[key] = _properties[key];
  });
  
  return cloned;
}

const traverse = (properties, cloned, callback) => {
  Object.keys(properties).forEach((key) => {
    if (isPrimitive(properties[key])) {
      return callback(properties, cloned, key);
    } else {
      traverse(properties[key], cloned[key], callback);
    }
  })
}

const isPrimitive = (value) => 
  value === null || (typeof value !== 'function' && typeof value !== 'object');

module.exports = update;
