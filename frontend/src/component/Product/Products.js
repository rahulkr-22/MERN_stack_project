import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";

const categories = [
  "Indoor Plants",
  "Air Purifying Plants",
  "Hanging Plants",
  "Flowering Plants",
  "Low Maintenance Plants",
  "Medicinal & Aromatic Plants",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 500]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const [tempCategory, setTempCategory] = useState(""); //added
  const [tempPrice, setTempPrice] = useState([0, 500]); //added
  const [tempRatings, setTempRatings] = useState(0); //added

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  // const priceHandler = () => {
  //   //console.log("slider tempprices: ", tempprice);
  //   setPrice(tempPrice);
  // };
  const overallHandler = () => {
    setPrice(tempPrice);
    setRatings(tempRatings);
    setCategory(tempCategory);
    // console.log(tempPrice);
    // console.log(tempRatings);
    // console.log(tempCategory);
  };

  const tempPriceHandler = (event, newTempPrice) => {
    setTempPrice(newTempPrice);
  };
  const tempRatingsHandler = (event, newTempRatings) => {
    setTempRatings(newTempRatings);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- Plants World" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "bold",
                color: "rgb(51,51,51)",
                borderBottom: "2px solid rgba(0, 0, 0, 0.171)",
              }}
            >
              Price
            </Typography>
            <Slider
              value={tempPrice} //added
              step={10} //added
              onChange={tempPriceHandler} //changed
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={500}
            />

            <Typography
              style={{
                marginTop: "5%",
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "bold",
                color: "rgb(51,51,51)",
                borderBottom: "2px solid rgba(0, 0, 0, 0.171)",
              }}
            >
              Categories
            </Typography>

            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setTempCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography
                component="legend"
                style={{
                  marginTop: "10%",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "rgb(51,51,51)",
                }}
              >
                Ratings Above
              </Typography>
              <Slider
                value={tempRatings}
                onChange={tempRatingsHandler}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
            <input
              type="submit"
              value="Apply Filter"
              onClick={(e) => overallHandler()}
              className="filterBtn"
            />
          </div>
          {/* pagination 6:55 */}
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
