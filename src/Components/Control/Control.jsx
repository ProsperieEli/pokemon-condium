import React from "react";
import FilterForm from "../Form/FilterForm";
import SearchForm from "../Form/SearchForm";

export default function Controls({
  name,
  handleSubmit, //function
  handleNameChange, //function
  types,
  filterChange, //function
  selectedType,
}) {
  return (
    <div className="controlsContainer">
      <SearchForm
        name={name}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
      />
      <FilterForm
        types={types}
        filterChange={filterChange}
        selectedType={selectedType}
      />
    </div>
  );
}
