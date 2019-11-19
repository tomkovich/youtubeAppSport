const ADD_CARDIO_TRAINING = "ADD_CARDIO_TRAINING";
const ADD_STRENGTH_TRAINING = "ADD_STRENGTH_TRAINING";
const REMOVE_CARDIO_TRAINING = "REMOVE_CARDIO_TRAINING";
const REMOVE_STRENGTH_TRAINING = "REMOVE_STRENGTH_TRAINING";
const UPDATE_CARDIO_TRAINING = "UPDATE_CARDIO_TRAINING";
const UPDATE_STRENGTH_TRAINING = "UPDATE_STRENGTH_TRAINING";

export const initialState = {
  cardios: [],
  strengths: []
};

export let reducer = (state, action) => {
  switch (action.type) {
    case ADD_CARDIO_TRAINING:
      return {
        ...state,
        cardios: [...state.cardios, action.data]
      };
    case ADD_STRENGTH_TRAINING:
      return {
        ...state,
        strengths: [...state.strengths, action.data]
      };
    case REMOVE_CARDIO_TRAINING:
      return {
        ...state,
        cardios: state.cardios.filter((item, i) => i !== action.id)
      };
    case REMOVE_STRENGTH_TRAINING:
      return {
        ...state,
        strengths: state.strengths.filter((item, i) => i !== action.id)
      };
    case UPDATE_CARDIO_TRAINING:
      return {
        ...state,
        cardios: state.cardios.map((item, index) =>
          action.id === index ? action.newItem : item
        )
      };
    case UPDATE_STRENGTH_TRAINING:
      return {
        ...state,
        strengths: state.strengths.map((item, index) =>
          action.id === index ? action.newItem : item
        )
      };
    default:
      return { ...state };
  }
};

export let setCardioTraining = data => ({ type: ADD_CARDIO_TRAINING, data });
export let setStrengthTraining = data => ({ type: ADD_STRENGTH_TRAINING, data });
export let removeCardioTraining = id => ({ type: REMOVE_CARDIO_TRAINING, id });
export let removeStrengthTraining = id => ({ type: REMOVE_STRENGTH_TRAINING, id });
export let editCardioTraining = (newItem, id) => ({
  type: UPDATE_CARDIO_TRAINING,
  newItem,
  id
});
export let editStrengthTraining = (newItem, id) => ({
  type: UPDATE_STRENGTH_TRAINING,
  newItem,
  id
});

