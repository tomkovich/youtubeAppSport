import React from "react";
import { Route } from "react-router-dom";
import Page from "./Page";
import { Home } from "./Home";

export default props => {
  return (
    <div>
      <Route exact path="/" render={() => <Home items={props.items} />}/>
      <Route
        exact
        path="/strength"
        render={
          () => <Page
            deleteItem={props.deleteStrengthTraining}
            list={props.state.strengths}
            addTraining={props.addStrengthTraining}
            updateTraining={props.updateStrengthTraining}
          />
        }
      />
      <Route
        exact
        path="/cardio"
        render={
          () => <Page
            deleteItem={props.deleteCardioTraining}
            list={props.state.cardios}
            addTraining={props.addCardioTraining}
            updateTraining={props.updateCardioTraining}
          />
        }
      />
    </div>
  );
};
