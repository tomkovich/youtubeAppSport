import React, { useState, useEffect } from "react";
import style from "./Content.module.css";

const Search = (props) => {

    const [value, setValue] = useState('')

    useEffect(() => {
        value === '' && props.setSearch(false)
    }, [value, props])

    let handleChange = (e) => {
        setValue(e.target.value)
        props.onChangeValue(e.target.value);
    }

  return (
    <div className={style.search}>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        placeholder="I'm looking for..."
      />
    </div>
  )
}

export default Search;