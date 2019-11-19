const GET_TRAININGS_DATA_SUCCESS = "GET_TRAININGS_DATA_SUCCESS";

export let itemsData = {
  items: []
};

export let itemsReducer = (state, { type, items }) => {
  switch (type) {
    case GET_TRAININGS_DATA_SUCCESS:
      return {
        ...state,
        items
      };
    default:
      return state;
  }
};

export let setTrainingsData = (items) => ({
    type: GET_TRAININGS_DATA_SUCCESS,
    items
})