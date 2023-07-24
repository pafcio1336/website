// import { ActionTypes } from "../constants/actionTypes";

// const initState = {
//   products: [],
//   items: [
//     { id: 1, counter: 0 },
//     { id: 2, counter: 0 },
//     { id: 3, counter: 0 },
//     { id: 4, counter: 0 },
//     { id: 5, counter: 0 },
//     { id: 6, counter: 0 },
//     { id: 7, counter: 0 },
//     { id: 8, counter: 0 },
//     { id: 9, counter: 0 },
//     { id: 10, counter: 0 },
//     { id: 11, counter: 0 },
//     { id: 12, counter: 0 },
//     { id: 13, counter: 0 },
//     { id: 14, counter: 0 },
//     { id: 15, counter: 0 },
//     { id: 16, counter: 0 },
//     { id: 17, counter: 0 },
//     { id: 18, counter: 0 },
//     { id: 19, counter: 0 },
//     { id: 20, counter: 0 },
//   ],
// };

// export const productReducer = (state = initState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS:
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };

// export const counterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case ActionTypes.INCREMENT:
//       const { payload } = action;
//       return {
//         ...state,
//         items: state.items.map((item) => {
//           if (item.id === payload) {
//             return {
//               ...item,
//               counter: item.counter + 1,
//             };
//           }
//           return item;
//         }),
//       };
//     case ActionTypes.DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };

// export const counterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case ActionTypes.INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case ActionTypes.DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };
