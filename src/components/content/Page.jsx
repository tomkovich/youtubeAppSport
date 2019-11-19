import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import EditForm from "./EditForm";
import FilteredList from "./FilteredList";
import Search from "./Search";
import style from "./Content.module.css";

export default props => {
  let editFormState = {
    title: "",
    time: "",
    date: ""
  };
  const [currentItem, setCurrentItem] = useState(editFormState);
  const [isEditing, setEditing] = useState(false);

  const [isSearch, setSearch] = useState(false);
  const [filteredItems, setFilteredItems] = useState(null);

  let editTraining = id => {
    setEditing(true);
    setCurrentItem({
      id: id,
      title: props.list[id].title,
      time: props.list[id].time,
      date: props.list[id].date
    });
  };

  let updateItem = (newItem, id) => {
    setEditing(false);
    props.updateTraining(newItem, id);
  };

  let onChangeValue = filteredTitle => {
    let filteredItems = props.list;

    filteredTitle.length > 0 && setSearch(true);
    filteredItems = filteredItems.filter(item => {
      let filteredItem = item.title.toLowerCase();
      return filteredItem.includes(filteredTitle.toLowerCase()) !== false;
    });

    setFilteredItems(filteredItems);
  };

  return (
    <div className={style.pageTraining}>
      <Search onChangeValue={onChangeValue} setSearch={setSearch} />
      {isEditing ? (
        <EditForm updateItem={updateItem} currentItem={currentItem} />
      ) : (
        <Form addTraining={props.addTraining} />
      )}
      {isSearch ? (
        <FilteredList filteredItems={filteredItems} />
      ) : (
        <List
          editTraining={editTraining}
          deleteItem={props.deleteItem}
          list={props.list}
        />
      )}
    </div>
  );
};
