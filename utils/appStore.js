import { createSlice, current } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    list: [],
  },
  reducers: {
    addItems: (state, action) => {
      const { id } = action?.payload?.card?.info;
      const index = state.list?.findIndex(
        (item) => current(item)?.card?.info?.id === id
      );

      if (index !== -1) {
        return;
      }

      state.list.push(action.payload);
      state.list.reverse();
    },

    removeItem: (state, action) => {
      state.list = state.list?.filter((item) => {
        return current(item)?.card?.info?.id !== action.payload;
      });
    },

    makeCartEmpty: (state) => {
      state.list.length = 0;
    },

    addItemFromCart: (state, action) => {
      const { payload } = action;
      const index = state.list?.findIndex(
        (item) => current(item)?.card?.info?.id === payload
      );

      if (index === -1) {
        return state.list;
      }

      const updatedList = state?.list?.map((item, idx) => {
        if (index === idx) {
          const itemObj = current(item);
          const infoObj = { ...itemObj?.card?.info };
          infoObj.Quantity = infoObj.Quantity + 1;
          return { ...itemObj, card: { ...itemObj.card, info: infoObj } };
        }
        return item;
      });

      state.list = updatedList;
    },

    removeItemFromCart: (state, action) => {
      const { payload } = action;

      const index = state.list?.findIndex(
        (item) => current(item)?.card?.info?.id === payload
      );

      let updatedList = state?.list?.map((item, idx) => {
        if (index === idx) {
          const itemObj = current(item);
          const infoObj = { ...itemObj?.card?.info };

          infoObj.Quantity = infoObj.Quantity - 1;

          return { ...itemObj, card: { ...itemObj.card, info: infoObj } };
        }
        return item;
      });

      updatedList = updatedList?.filter(
        (item) => item?.card?.info?.Quantity > 0
      );

      state.list = updatedList;
    },
  },
});

export const {
  addItems,
  removeItem,
  makeCartEmpty,
  addItemFromCart,
  removeItemFromCart,
} = appSlice.actions;

export default appSlice.reducer;
