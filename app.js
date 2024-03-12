import { createStore } from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

const displayBalance = document.querySelector("#balance");
const reset = document.querySelector("#reset");
const modalEnd = document.querySelector("#modalEnd");
const modalTally = document.querySelector("#modalTally");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const heroText = document.querySelector("#hero-text");

const initialState = {
  count: 0,
  endCount: Math.ceil(Math.random() * 100),
  value: 0,
  prevValue: 0,
  increment: Math.ceil(Math.random() * 1000),
  modalTallyValue: 0,
  modalTallyOpacity: 0,
};

const store = createStore(reducer);

modalEnd.style.display = "none";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
        value: state.value + state.increment,
        prevValue: state.value,
        increment: Math.ceil(Math.random() * 1000),
        modalTallyValue: `+${state.increment}`,
      };
    case "SUBTRACT":
      return {
        ...state,
        count: state.count + 1,
        value: state.value - state.increment,
        prevValue: state.value,
        increment: Math.ceil(Math.random() * 1800),
        modalTallyValue: `-${state.increment}`,
      };

    case "RESET":
      return {
        ...state,
        count: 0,
        endCount: Math.ceil(Math.random() * 10),
        value: 0,
        prevValue: 0,
        increment: 0,
      };

    default:
      return state;
  }
}

function render() {
  const state = store.getState();

  if (state.count < state.endCount) {
    if (state.count > 0) {
      heroText.innerText = "CONTINUE TO CHOOSE YOUR EXISTENCE.";
      heroText.classList.add("animate-pulse");
    }

    if (state.count > 3) {
      heroText.innerHTML = "IT WILL BE OVER SOON. CONTINUE.";
    }

    displayBalance.innerHTML = `$${state.value.toString()}`;
  } else {
    modalEnd.style.display = "flex";
    modalEnd.innerText = `You died. Your worth was $${
      store.getState().prevValue
    }.`;
    heroText.innerText = "WHAT ARE YOU DOING WITH YOUR LIFE?";
  }
}
render();

// const popupAmount = () => {
//   modalTally.classList.add("animate-customPing");
//   modalTally.innerText = `${store.getState().modalTallyValue}`;
//   modalTally.style.opacity = 1;
//   modalTally.addEventListener("animationend", function () {
//     modalTally.style.opacity = 0;
//     modalTally.removeEventListener("animationend", this);
//     modalTally.classList.remove("animate-customPing");
//   });
// };

const popupTrigger = (transactionType) => {
  const popup = document.querySelector(transactionType);
  popup.innerText = `${store.getState().modalTallyValue}`;
  popup.classList.add("animate-customPing");
  popup.style.opacity = 1;
  popup.addEventListener("animationend", function () {
    popup.style.opacity = 0;
    popup.removeEventListener("animationend", this);
    popup.classList.remove("animate-customPing");
  });
};

store.subscribe(render);

addBtn.addEventListener("click", function () {
  store.dispatch({ type: "ADD" });
  popupTrigger("#popupAdd");
});

subtractBtn.addEventListener("click", function () {
  store.dispatch({ type: "SUBTRACT" });
  popupTrigger("#popupSubtract");
});

if (store.getState.showEndModal === true) {
}

modalEnd.addEventListener("click", function () {
  modalEnd.style.display = "none";
  store.dispatch({ type: "RESET" });
  console.log("modal clicked");
});
