//

Array.prototype.groupBy = function (cb) {
  if (!Array.isArray(this) || this.length === 0) return {};
  const res = {};
  for (let item of this) {
    let key;
    try {
      key = item == null ? null : cb(item);
    } catch {
      key = null;
    }
    const groupKey = String(key);
    if (!res[groupKey]) {
      res[groupKey] = [];
    }
    res[groupKey].push(item);
  }
  return res;
};
