import React, { useState } from 'react';
import Unsplash, { toJson } from "unsplash-js";


export default function SearchPhotos() {

    const unsplash = new Unsplash({
        accessKey: "d2dA2GKNe8jDVeYM0Hoe_aTMhHHtmQSAPxRoU59pm7w",
      });
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const searchImages = async (e) => {
          e.preventDefault();
          unsplash.search
            .photos(query, 50)
            .then(toJson)
            .then((json) => {
                setPics(json.results);
              console.log(json);
            });
      };

  return (
    <>
      <form className="form" onSubmit={searchImages}> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list" >
      {
        pics.map((pic) => <div className="card" key={pic.id}>
            <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
                >
            </img>
        </div>)
      }
      </div>
    </>
  );
}