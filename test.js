const ranked = [100, 90, 90, 80, 70];
const player = [70, 80, 105];

const map = {};
ranked.map((val) => {
  if (!map[val]) {
    map[val] = Object.keys(map).length + 1;
  }
});
const mid_point = Math.ceil(Object.values(map).length / 2);

const first_part_fn = (_val, initial, limit) => {
  for (let index = initial; index < limit; index++) {
    const val = Object.keys(map)[index];
    const first_val = Object.keys(map)[0];
    if (_val < first_val) {
      return map[first_val] + 1;
    }
    const val_next = Object.keys(map)[index + 1];
    // console.log("next", val_next, "curr", val, "value", val);
    if (_val >= val && _val < val_next) {
      return map[val];
    }
  }
};

const second_part_fn = (_val, initial, limit) => {
  for (let index = initial; index < limit; index++) {
    const val = Object.keys(map)[index];
    const last_val = Object.keys(map)[Object.keys(map).length - 1];
    if (_val >= last_val) {
      return map[last_val];
    }
    const val_next = Object.keys(map)[index + 1];
    if (_val >= val && _val < val_next) {
      return map[val];
    }
  }
};

const fn = (_val) => {
  if (Object.keys(map)[mid_point] <= _val) {
    console.log("2nd part");
    return second_part_fn(_val, mid_point, Object.keys(map).length);
  } else {
    console.log("1st part");
    return first_part_fn(_val, 0, mid_point);
  }
};

const result = [];
player.map((final) => {
  const rank = fn(final);
  result.push(rank);
});
console.log(map);
console.log(result);
