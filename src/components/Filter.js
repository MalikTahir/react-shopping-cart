import React from 'react'

function Filter({count,size,sort,filterProduct,sortProduct}) {
    return (
        <div className="filter">
            <div className="filter-count">{count} Products</div>
            <div className="filter-sort">
                <span>Sort </span>
                <select value={sort} onChange={sortProduct}>
                    <option value="lattest">Lattest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                <span>Filter </span>
                <select value= {size} onChange={filterProduct}>
                    <option value="">All</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value='l'>L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>

                </select>
            </div>
        </div>
    )
}

export default Filter
