class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.arr[this.arr.length] = element;
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var buffer = [];
    var len = indices.length;
    for(var i = 0; i < len; i++) {
      buffer.push(this.arr[indices[i]]);
      }
    indices.sort();
    buffer.sort(this.comparator);
    for (var j = 0; j < len; j++){
    this.arr[indices[j]] = buffer[j];
}

  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;