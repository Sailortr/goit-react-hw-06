import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="search-box">
      <label className="find-text">Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
