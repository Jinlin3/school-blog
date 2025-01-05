import React from 'react';
import Form from "next/form";

const SearchForm = () => {
  return (
    <Form className="flex items-center w-full max-w-4xl min-h-8 border-[5px] border-white rounded-[80px] py-2 px-4 mx-4 my-4" action="/" scroll={false}>
      <input 
        name="query"
        defaultValue=""
        placeholder="Search Posts"
        className="w-full outline-none font-bold text-white placeholder:font-semibold placeholder:text-white h-auto bg-red-400"
      />
    </Form>
  )
}

export default SearchForm