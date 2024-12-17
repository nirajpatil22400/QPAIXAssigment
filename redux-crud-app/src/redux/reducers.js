// const initialState = {
//   data: [],
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_DATA":
//       return { ...state, data: [...state.data, action.payload] };
//     case "UPDATE_DATA":
//       return {
//         ...state,
//         data: state.data.map((item) =>
//           item.id === action.payload.id ? action.payload : item
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

const initialState = {
  data: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, data: [...state.data, action.payload] };

    case "UPDATE_DATA":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default rootReducer;
