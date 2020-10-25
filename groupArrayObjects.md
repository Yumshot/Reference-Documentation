---
title: groupArrayObjects
tags: array,objects
---

Group an Array of Objects by key.
- ```@param {Object[]} data```
- ```@param {String} key```

```js
function groupBy(data, key) {
  return data.reduce((store, obj) => {
    // You can use this one linear if you want to avoid using "if-else"
    // (store[obj[key]] = store[obj[key]] || []).push(obj);
    const value = obj[key];
    if (!store[value]) store[value] = [obj];
    else store[value].push(obj);
    return store;
  }, {});
}


const characters = [
  {
    name: "Ichigo Kurosaki",
    animeName: "Bleach",
  },
  {
    name: "Levi",
    animeName: "Attack on Titan",
  },
  {
    name: "Kirito",
    animeName: "Sword Art Online",
  },
  {
    name: "Eren Yeager",
    animeName: "Attack on Titan",
  },
];

console.log(groupBy(characters, "animeName")); 
```
Output : 
```js
{
  Attack on Titan: [[object Object] {
  animeName: "Attack on Titan",
  name: "Levi"
}, [object Object] {
  animeName: "Attack on Titan",
  name: "Eren Yeager"
}],
  Bleach: [[object Object] {
  animeName: "Bleach",
  name: "Ichigo Kurosaki"
}],
  Sword Art Online: [[object Object] {
  animeName: "Sword Art Online",
  name: "Kirito"
}]
}
```











