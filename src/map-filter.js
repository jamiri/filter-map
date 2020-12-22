// Copyright 2020 Javad M. Amiri. All rights reserved. MIT license.
export function mapFilter(array, mapFunction, filterFunction) {
    return array.reduce((acc, val) => {
        const intermediaryRes = mapFunction(val)
        if (filterFunction(intermediaryRes)) {
            acc.push(intermediaryRes)
        }
        return acc
    }, [])
}
