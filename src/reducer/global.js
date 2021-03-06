export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  const total = basket?.reduce((amount, { price }) => {
    return amount + price;
  }, 0);
  return total;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id} as its not in basket!)`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case 'SET_AUTH_LOADING': {
      return {
        ...state,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
};

export default reducer;
