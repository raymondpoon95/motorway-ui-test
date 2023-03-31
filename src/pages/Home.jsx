import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import useDebounce from "../hooks/useDebounce";

import Form from "../components/Form";
// import Card from "../components/Card";
import ErrorPage from "./ErrorPage";

const LazyCard = React.lazy(() => import("../components/Card"));

const Home = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    axios
      .get(`images?limit=10`)
      .then((response) => {
        if (response.status === 200 && response.statusText === "OK") {
          console.log("successfully fetched data");
          setImages(response?.data);
        } else {
          throw new Error("No results found");
        }
      })
      .catch((error) => {
        console.log("error occured", error.message);
        setErrorMessage(error.message);
      });
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const filteredImages = images?.filter((item) =>
    item.alt_description
      .toLowerCase()
      .includes(debouncedSearchQuery.toLowerCase())
  );

  if (errorMessage) {
    return <ErrorPage />;
  }

  //add a spinner
  if (images.length === 0) {
    return <div>LOADING....</div>;
  }

  return (
    <div className="container">
      <div className="searchBox-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          name="searchBox"
          placeholder="Search..."
          tabIndex="1"
        />
      </div>

      <main className="card-grid-container">
        {/* start loading when 30% visible in viewport */}
        <LazyLoadComponent threshold={0.3}>
          {filteredImages.length > 0 ? (
            filteredImages.map((img) => (
              <Suspense fallback={<div>Loading...</div>} key={img.id}>
                <LazyCard img={img} />
              </Suspense>
            ))
          ) : (
            <p className="results-error">No results found. Please try again.</p>
          )}
        </LazyLoadComponent>
      </main>

      <Form />
    </div>
  );
};

export default Home;
