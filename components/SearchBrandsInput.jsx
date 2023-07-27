"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SearchBrandInput = ({ setReviewLinkFromSuggestion }) => {
  const [inputValue, setInputValue] = useState("");
  const [queries, setQueries] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getQueries = useCallback(async (searchValue) => {
    if (searchValue !== "") {
      try {
        const url = `https://api.brandfetch.io/v2/search/${searchValue}`;

        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setQueries(data);
        }
      } catch (err) {
        console.log("Something went wrong, try again later.");
      }
      return;
    }

    setQueries([]);
  }, []);

  useEffect(() => {
    getQueries(inputValue);
  }, [inputValue, getQueries]);

  const handleInputChange = (event) => {
    setShowSuggestions(inputValue !== "");
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (brandDomain, brandIcon) => {
    setInputValue(brandDomain);
    setReviewLinkFromSuggestion(brandDomain, brandIcon);
    setShowSuggestions(false);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by name or website"
        className="form_input"
        required
      />
      {showSuggestions && (
        <ul className="flex flex-col gap-4 glassmorphism">
          {queries.map((brand) => {
            const brandIcon = brand.icon ? (
              <Image
                src={brand.icon}
                alt={brand.name || "Company icon"}
                width={25}
                height={25}
                className="mr-2 shadow-md rounded-sm"
              />
            ) : null;

            return (
              <li
                key={brand.domain}
                onClick={() => handleSuggestionClick(brand.domain, brand.icon)}
                className="flex items-center"
              >
                {brandIcon}
                {brand.domain}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBrandInput;
