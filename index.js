// Copyright 2020 Javad M. Amiri. All rights reserved. MIT license.
function filterMap(array, filterFunction, mapFunction) {
    return array.reduce((acc, val) => {
        if (filterFunction(val)) {
            acc.push(mapFunction(val))
        }
        return acc
    }, [])
}

function mapFilter(array, mapFunction, filterFunction) {
    return array.reduce((acc, val) => {
        const intermediaryRes = mapFunction(val)
        if (filterFunction(intermediaryRes)) {
            acc.push(intermediaryRes)
        }
        return acc
    }, [])
}

Array.prototype.filterMap = Array.prototype.filterMap || function (filterFunction, mapFunction) {
    return filterMap(this, filterFunction, mapFunction)
}

Array.prototype.mapFilter = Array.prototype.mapFilter || function (mapFunction, filterFunction) {
    return mapFilter(this, mapFunction, filterFunction)
}
