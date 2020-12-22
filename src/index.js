import {filterMap} from './filter-map'
import {mapFilter} from './map-filter'

Array.prototype.filterMap = Array.prototype.filterMap || function (filterFunction, mapFunction) {
    return filterMap(this, filterFunction, mapFunction)
}

Array.prototype.mapFilter = Array.prototype.mapFilter || function (mapFunction, filterFunction) {
    return mapFilter(this, mapFunction, filterFunction)
}