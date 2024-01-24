import React from "react";
import { useState, useEffect } from "react";
import michelinData from "/src/michelin.json";
import LoadingIcon from "./LoadingIcon";

export default function MultiResults(props) {

  // Control whether the data is loading or not
  const [isDataLoading, setIsDataLoading] = useState(true);

  // Simulate the loading time of an API call and set 'isDataLoading' to false once done
  useEffect(() => {
    setTimeout(() => {
      setIsDataLoading(false);
    }, 2000)
  }, []);

  // If data is loading, return the loading spinner
  if (isDataLoading === true) {
    return (
      <div className="max-h-[750px] pt-48 flex justify-center align-center">
        <LoadingIcon />
      </div>
    )
    // if data is no longer loading, return the results
  } else {
    return (
      <div className="max-h-[2044px] overflow-y-auto p-4 rounded-lg shadow-lg bg-white">
        {/* Creates a UL for all results */}
        <ul role="list" className="divide-y divide-gray-100">
          {michelinData.filter((michelinData) => {
            return michelinData.Country.includes(props.selectedCountry);
          }).map((michelinData) => (
              <li key={michelinData.ID}>
                <a href ={michelinData.Url}>
                  <div className="py-5">
                    <div className="flex min-w-0 gap-x-4">
                    {/* CuisineImage */}
                      <img className="h-24 w-24 flex-none rounded-md bg-gray-50 object-cover" src={michelinData.CuisineImage} alt="" />      
                      {/* Restaurant Info */}
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{michelinData.Name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{michelinData.Cuisine}</p>           
                        <img className="h-4 mt-1.5 mb-1.5" src={michelinData.AwardIcon} alt="" />
                      </div>
                      <div className="min-w-0">
                        <p className=" text-right hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-4 text-sm leading-6 text-gray-900">{michelinData.Location}</p>
                        <p className="hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-4 text-xs leading-5 text-gray-500">{michelinData.Country}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    )
}}