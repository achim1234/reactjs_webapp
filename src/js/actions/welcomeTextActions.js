export function fetchWelcomeText() {
  return {
    type: "FETCH_WELCOME_TEXT_FULFILLED",
    payload: {
      welcomeText: "Develope UI-Elements with React"
    }
  }
}