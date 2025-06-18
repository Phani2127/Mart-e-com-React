import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const getInitialState = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productQuantity =
    JSON.parse(localStorage.getItem("productQuantity")) || {};
  const total = JSON.parse(localStorage.getItem("total")) || {
    totalItems: 0,
    totalPrice: 0,
  };

  return { cart, productQuantity, total };
};

// Save to localStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem(
    "productQuantity",
    JSON.stringify(state.productQuantity)
  );
  localStorage.setItem("total", JSON.stringify(state.total));
};

const products = createSlice({
  name: "productSlice",
  initialState: getInitialState(),
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      const index = state.cart.findIndex((item) => item.id === id);

      if (index !== -1) {
        if (state.cart[index].noOf)
          state.productQuantity[id] += action.payload.noOf;
        else state.productQuantity[id] += 1;
      } else {
        state.cart.push(action.payload);
        if (action.payload.noOf) {
          state.productQuantity[id] = action.payload.noOf;
        } else state.productQuantity[id] = 1;
      }

      state.total.totalItems = Object.values(state.productQuantity).reduce(
        (acc, qty) => acc + qty,
        0
      );
      state.total.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * state.productQuantity[item.id],
        0
      );
      saveToLocalStorage(state);
    },

    increamentQuantity: (state, action) => {
      const id = action.payload;
      if (state.productQuantity[id]) {
        state.productQuantity[id] += 1;
      } else {
        state.productQuantity[id] = 1;
      }

      state.total.totalItems = Object.values(state.productQuantity).reduce(
        (acc, qty) => acc + qty,
        0
      );
      state.total.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * state.productQuantity[item.id],
        0
      );
      saveToLocalStorage(state);
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;

      if (state.productQuantity[id] === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
        delete state.productQuantity[id];
      } else if (state.productQuantity[id] > 1) {
        state.productQuantity[id] -= 1;
      }

      state.total.totalItems = Object.values(state.productQuantity).reduce(
        (acc, qty) => acc + qty,
        0
      );
      state.total.totalPrice = state.cart.reduce(
        (acc, item) => acc + item.price * state.productQuantity[item.id],
        0
      );
      saveToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increamentQuantity,
  decrementQuantity,
} = products.actions;

export default products.reducer;
