module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  item.name = 'Angela';
  item.enhancement !== 20 ? item.enhancement += 1 : null;

  return { ...item };
}

function fail(item) {
  
  item.name = 'Angela';
  if (item.enhancement < 15) {
    item.durability -= 5
  } else if (item.enhancement >= 15 && item.enhancement <= 16) {
    item.durability -= 10
  } else {
    item.durability -= 1
  }

  return { ...item };
}

function repair(item) {

  item.name = 'Angela';
  item.durability = 100;

  return { ...item };
}

function get(item) {
  return { ...item };
}
