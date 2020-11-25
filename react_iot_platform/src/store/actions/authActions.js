import axios from "axios";

function userInfo(dispatch) {
  console.log("inside userINfo");
  axios({
    method: "get",
    url: process.env.REACT_APP_API_URL + "/auth/users/me/",
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
  }).then(res => {
    console.log("details", res);
    dispatch({ type: 'USER_DETAILS', user: res.data })
  }).catch(err => {
    if (netErr(err)) {
      dispatch({ type: 'NET_ERR', err: 'netErr' })
    } else {
      console.log("details", err);
    }
  })
}

function netErr(error) {
  if (!error.response) {
    return true;
  }
  else {
    return false
  }
}


export const userLogin = (user) => {
  const url = process.env.REACT_APP_API_URL + "/auth/token/login/";
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING', action: true })
    axios({
      method: "post",
      url: url,
      data: user,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.auth_token);
        userInfo(dispatch)
        dispatch({ type: "AUTH_SUCCESS", user });
      })
      .catch((err) => {
        if (netErr(err)) {
          dispatch({ type: 'NET_ERR', err: 'netErr' })
        } else {
          console.log(err.response.data.code);
          console.log(err.response.data);
          dispatch({ type: "AUTH_FAILED", err });
        }

      });
  };
};

export const userLogout = () => {

  const url = process.env.REACT_APP_API_URL + "/auth/token/logout/";
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING', action: true })
    axios({
      method: "post",
      url: url,
      data: null,
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        localStorage.clear();

        console.log(localStorage);
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        if (netErr(err)) {
          dispatch({ type: 'NET_ERR', err: 'netErr' })
        } else {
          console.log(err);
        }

      });
  };
};

export const userSignup = (user) => {
  const url = process.env.REACT_APP_API_URL + "/auth/users/";
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING', action: true })
    axios({
      method: "post",
      url: url,
      data: user,
    })
      .then((res) => {
        dispatch({ type: "REG_SUCCESS", user });
        //post req to auto login after successful sign-up
        axios({
          method: "post",
          url: process.env.REACT_APP_API_URL + "/auth/token/login/",
          data: { email: user.email, password: user.password },
        })
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.auth_token);
            userInfo(dispatch);
            dispatch({ type: "AUTH_SUCCESS", user });
          })
          .catch((err) => {
            if (netErr(err)) {
              dispatch({ type: 'NET_ERR', err: 'netErr' })
            } else {
              console.log(err.response.data);
              console.log(err.response.data);
              dispatch({ type: "AUTH_FAILED", err });
            }

          });
      })
      .catch((err) => {
        if (netErr(err)) {
          dispatch({ type: 'NET_ERR', err: 'netErr' })
        } else {
          dispatch({ type: "REG_FAILED", err });
        }
      });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    axios({
      method: 'DELETE',
      url: process.env.REACT_APP_API_URL + "/auth/users/me/",
      data: user,
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    }).then(res => {
      localStorage.clear()
      dispatch({ type: "LOGOUT_SUCCESS" });
      console.log(res);
    }).catch(err => {
      if (netErr(err)) {
        dispatch({ type: 'NET_ERR', err: 'netErr' })
      } else {
        console.log(err.response);
        dispatch({ type: 'DELETE_ERR', err: err.response })
      }

    })
  }
}

export const clearStatus = () => {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_AUTH_STATUS' })
  }
}
