import exAxios from "../../config/exAxios";

export const setUserEX = (user) => {
  return { type: "SET_USER", payload: user };
};

export const startGetUserEX = () => {
  return (dispatch) => {
    axios
      .get("/users/account", {
        headers: { "x-auth": localStorage.getItem("authToken") },
      })
      .then((response) => {
        const user = response.data;
        dispatch(setUser(user));
      })
      .catch((err) => {
        alert(err);
      });
  };
};
//Named exports
