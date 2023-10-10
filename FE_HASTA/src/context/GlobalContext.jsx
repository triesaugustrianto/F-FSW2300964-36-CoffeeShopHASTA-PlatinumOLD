import React, { createContext, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../fetch";

export const QueryConsum = createContext();
export const SearchConsum = createContext();
export const ProductConsum = createContext();

export const GlobalContext = ({ children }) => {
  const [query, setQuery] = useState("All");
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useSWR(
    `http://app-citrapersada.net:2000/api/products`,
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Internal server error</div>;

  return (
    <QueryConsum.Provider value={[query, setQuery]}>
      <SearchConsum.Provider value={[search, setSearch]}>
        <ProductConsum.Provider value={[data]}>
          {children}
        </ProductConsum.Provider>
      </SearchConsum.Provider>
    </QueryConsum.Provider>
  );
};
