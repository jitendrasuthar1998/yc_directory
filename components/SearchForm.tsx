import React from 'react';
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';

/*
The <Form> component extends the HTML <form> element to provide prefetching of loading UI, client-side navigation on submission, and progressive enhancement.

It's useful for forms that update URL search params as it reduces the boilerplate code needed to achieve the above.
*/

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          S
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
