import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
export default function ProductFilter() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts
        } = value;
        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        companies = [...companies];
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}

                {/* category search */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    className="filter-item"
                    id="company"
                    value={company}
                    onChange={handleChange}
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                    {/* <option value="all">all</option>
                    <option value="fuji">fuji</option>
                    <option value="htc">htc</option>
                    <option value="samsung">samsung</option> */}
                  </select>
                </div>
                {/* end of category search */}
                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price :<span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="filter-price"
                    min={min}
                    max={max}
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* price range */}
                {/* free shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    value={shipping && true}
                    onChange={handleChange}
                  />
                </div>
                {/* free shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
