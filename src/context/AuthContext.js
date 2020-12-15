import createDataContext from "./createDataContext";
const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token:null,errorMessage:''}
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "add_err":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });

    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data && data.token) {
            this.setState({ login: true });
            dispatch({ type: "signup", payload: response.data.token });
          }
        });
     

     
    } catch (err) {
      dispatch({ type: "add_err", payload: "Something went wrong" });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);

      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_err",
        payload: "SOmething went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token ')
  dispatch({type:'signout'})
  navigate('loginFlow')
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, clearErrorMessage, signin, signout, signup },
  { token: null, errorMessage: "" }
);
