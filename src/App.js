import React, { useReducer, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import Content from "./components/content/Content";
import {
  initialState,
  reducer,
  setCardioTraining,
  setStrengthTraining,
  removeCardioTraining,
  removeStrengthTraining,
  editCardioTraining,
  editStrengthTraining
} from "./reducers/reducer-training";
import Client from './contenful';
import { itemsReducer, itemsData, setTrainingsData } from "./reducers/reducer-data";

const App = () => {
  
  const [data, dispatch] = useReducer(reducer, initialState);
  const [items, dispatchItems] = useReducer(itemsReducer, itemsData);

  let getTrainingData = async () => {
    try {
      let response = await Client.getEntries();
      dispatchItems(setTrainingsData(response));
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTrainingData();
  }, [])

  let addCardioTraining = data => {
    dispatch(setCardioTraining(data));
  };

  let addStrengthTraining = data => {
    dispatch(setStrengthTraining(data));
  };

  let deleteCardioTraining = id => {
    dispatch(removeCardioTraining(id));
  };

  let deleteStrengthTraining = id => {
    dispatch(removeStrengthTraining(id));
  };

  let updateCardioTraining = (newItem, id) => {
    dispatch(editCardioTraining(newItem, id));
  };

  let updateStrengthTraining = (newItem, id) => {
    dispatch(editStrengthTraining(newItem, id));
  };

  return (
    <BrowserRouter>
      <div className="appContainer">
        <Header />
        <Content
          state={data}
          items={items}
          deleteStrengthTraining={deleteStrengthTraining}
          deleteCardioTraining={deleteCardioTraining}
          addCardioTraining={addCardioTraining}
          addStrengthTraining={addStrengthTraining}
          updateCardioTraining={updateCardioTraining}
          updateStrengthTraining={updateStrengthTraining}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
