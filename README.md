# filter-map
Array utility to help writing filter/map separately without struggling with reduce

## Description
Have you ever experienced writing filtering and mapping over an array at the same time? will you go for this way:
```js
const res = [1, 2, 3, 4, 5].filter(it => it % 2 === 0).map(it => it ** 3) // O(n^2)
console.log(res) // [8, 64]
```
Then I guess you have a colleague that adds a review comment to use Array's reduce to perform less iterations. Why bother writing it with reduce when you can do:
```js
const res = [1, 2, 3, 4, 5].filterMap(it => it % 2 === 0, it => it ** 3) // O(n)
console.log(res) // [8, 64]
```

## Installing

```
npm i -S @jamiri/filter-map
```
or 
```
yarn add @jamiri/filter-map
```

## Importing

 #### Nodejs
```js
require('filter-map')
```

#### Webpack
```js
import 'filter-map'
```

## Api

Upon **require**ing/**import**ing the package following functions are added to the array prototype


**filterMap(filterFn, mapFn)**  
**mapFilter(mapFn, filterFn)**

These are now available on instances of arrays i.e. all arrays from there on.
