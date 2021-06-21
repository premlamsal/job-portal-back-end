import Axios from "axios";

// axios allow cross origin
Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const state = {
  cart: [],
};
const getters = {
  getBooks(state) {
    return state.books;
  },
  getTotalBook(state) {
    return state.books.length;
  },
  getCartItems(state) {
    return state.cart;
  },
  getTotalItemsInCart(state) {
    return state.cart.reduce(function (carry, cartItem) {
      return carry + parseFloat(cartItem.bookQuantity);
    }, 0);
  },

  getGrandTotalCart(state) {
    return state.cart.reduce(function (carry, cartItem) {
      return (
        carry +
        parseFloat(cartItem.bookQuantity) *
          (parseFloat(cartItem.bookPrice) - parseFloat(cartItem.bookDiscount))
      );
    }, 0);
  },
};

const mutations = {
  pushCart(state, payload) {
    // const book = state.books.find((book) => {
    //   return book.id == payload.bookId;
    // });

    const newCartItem = {
      bookId: payload.bookId,
      bookName: payload.name,
      bookPrice: payload.price,
      bookImage: payload.img,
      bookQuantity: payload.quantity,
      bookDiscount: payload.discount,
      bookLineTotal: payload.price * payload.quantity,
    };

    state.cart.push(newCartItem);
  },
  increaseQuantityInCart(state, cart) {
    cart.bookQuantity++;
    cart.bookLineTotal = cart.bookQuantity * cart.bookPrice;
  },
  decreaseQuantityInCart(state, cart) {
    cart.bookQuantity--;
    cart.bookLineTotal = cart.bookQuantity * cart.bookPrice;
  },
  popCart(state, bookId) {
    const cart = state.cart.find((cart) => {
      return cart.bookId == bookId;
    });
    state.cart.splice(state.cart.indexOf(cart), 1);
  },
  clearCart(state) {
    state.cart = [];
  },
};

const actions = {
  addBookToCart(context, payload) {
    return new Promise((resolve, reject) => {
      const cart = context.state.cart.find((cart) => {
        return cart.bookId == payload.bookId;
      });
      let car_qty;
      if (cart) {
        car_qty = cart.bookQuantity;
      } else {
        car_qty = 0;
      }
      Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

      Axios.defaults.headers.common["Accept"] = "application/json";

      Axios.get("https://eshop.test/api/frontend/checkstock/" + payload.bookId)
        .then((response) => {
          if (response.data.instock_quantity >= car_qty + 1) {
            if (!cart) {
              context.commit("pushCart", payload);
              resolve("Added Item to Cart");
            } else {
              context.commit("increaseQuantityInCart", cart);
              resolve("Book quantity incremented.");
            }
          } else {
            reject("Sorry no stock availabe for this book.");
          }
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  },
  decrementTheCart(context, bookId) {
    const cart = context.state.cart.find((cart) => {
      return cart.bookId == bookId;
    });

    if (cart.bookQuantity > 1) {
      context.commit("decreaseQuantityInCart", cart);
    }
  },
  removeBookFromCart(context, bookId) {
    const cart = context.state.cart.find((cart) => {
      return cart.bookId == bookId;
    });

    if (cart.bookQuantity > 0) {
      context.commit("popCart", bookId);
    }
  },
  incrementTheCart(context, bookId) {
    return new Promise((resolve, reject) => {
      const cart = context.state.cart.find((cart) => {
        return cart.bookId == bookId;
      });
      const car_qty = cart.bookQuantity;

      Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

      Axios.defaults.headers.common["Accept"] = "application/json";

      Axios.get("https://eshop.test/api/frontend/checkstock/" + bookId)
        .then((response) => {
          if (response.data.instock_quantity >= car_qty + 1) {
            if (cart.bookQuantity > 0) {
              context.commit("increaseQuantityInCart", cart);
              resolve("Book quantity incremented.");
            }
          } else {
            reject("Sorry no stock availabe for this book.");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
