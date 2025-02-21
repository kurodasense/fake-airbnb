export function isEmptyObject(obj) {
  return obj == null || Object.keys(obj).length === 0;
}
