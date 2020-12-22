// Copyright 2020 Javad M. Amiri. All rights reserved. MIT license.
export function filterMap(array, filterFunction, mapFunction) {
    return array.reduce((acc, val) => {
        if (filterFunction(val)) {
            acc.push(mapFunction(val))
        }
        return acc
    }, [])
}