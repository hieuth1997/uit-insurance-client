const isExist = (value, required = false) => {
  for (const key in value)
    value.hasOwnProperty(key) && !value[key] && delete value[key];
  if (required && Object.keys(value).length === 0) return false;
  if (required) return true;
  return value;
};
export default isExist;
