const update = (originalValue, newValue) => {
  const cloned = Object.assign({}, originalValue);
  if (isPrimitive(originalValue) && isPrimitive(newValue)) {
    return newValue;
  }

  traverse(newValue, cloned, (_newValue, _cloned, key) => {
    _cloned[key] = _newValue[key];
  });
  
  return cloned;
}

const traverse = (newValue, cloned, callback) => {
  Object.keys(newValue).forEach((key) => {
    if (isPrimitive(newValue[key])) {
      return callback(newValue, cloned, key);
    } else {
      traverse(newValue[key], cloned[key], callback);
    }
  })
}

const isPrimitive = (value) => 
  value === null || (typeof value !== 'function' && typeof value !== 'object');

module.exports = update;
