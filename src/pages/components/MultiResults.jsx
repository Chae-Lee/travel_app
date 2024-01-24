import React from "react";
import { useState, useEffect } from "react";
import restaurants from "/src/michelin.json";
import LoadingIcon from "./LoadingIcon";
import michelin from "../../michelin.json"

export default function MultiResults({ filteredResults }) {

console.log(filteredResults)

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
      <div className="max-h-[750px] overflow-y-auto">
        {/* Creates a UL for all results */}
        <ul role="list" className="divide-y divide-gray-100">
          {filteredResultsArray.map((result) => (
            <li key={result.ID} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                {/* CuisineImage */}
                <img className="h-24 w-24 flex-none rounded-md bg-gray-50 object-cover" src={result.CuisineImage} alt="" />
                {/* Restaurant Info */}
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{result.Name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{result.Cuisine}</p>
                  <img className="h-4 mt-1.5 mb-1.5" src={result.AwardIcon} alt="" />
                  <a className="mt-1 truncate text-xs leading-5 text-gray-500 underline" href={result.Url}>Read the Michelin Guide</a>
                </div>
              </div>
              {/* Restaurant Location */}
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-4">
                <p className="text-sm leading-6 text-gray-900">{result.Location}</p>
                <p className="text-xs leading-5 text-gray-500">{result.Country}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// {
//   filteredResults?.map((result) => (
//     <li key={result.ID}>
//       {result.Award}
//     </li>


//   ))
// }