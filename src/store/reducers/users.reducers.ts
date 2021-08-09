import {
  USER_LOADING_ACTION,
  USER_SIGNUP_ACTION,
  USER_SIGNIN_ACTION,
  VALIDATE_TOKEN_ACTION,
  USER_SIGNOUT_ACTION,
  UserActionTypes,
} from "../../types/users.types";

const initialState = {
  username: "",
  email: "",
  displayname: "",
  token: "",
  error: null,
  isLoading: false,
  redirectURL: "/",
  userLoading: false,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  let updatedUser = state;

  switch (action.type) {
    case USER_LOADING_ACTION: {
      updatedUser = {
        ...state,
        isLoading: action.userLoading,
      };
      break;
    }
    case USER_SIGNUP_ACTION: {
      const { user = {} } = action;
      updatedUser = {
        ...state,
        userLoading: action.userLoading,
        username: user.username || "",
        email: user.email || "",
        displayname: user.displayname || "",
        redirectURL: "/signin?user=new",
        error: action.error,
      };
      break;
    }
    case USER_SIGNIN_ACTION: {
      const { user = {} } = action;
      updatedUser = {
        ...state,
        userLoading: action.userLoading,
        username: user.username || "",
        email: user.email || "",
        displayname: user.displayname || "",
        token: action.token || "",
        error: action.error,
      };
      break;
    }
    case VALIDATE_TOKEN_ACTION: {
      updatedUser = {
        ...state,
        token: action.token || "",
        email: action.email || "",
        redirectURL: action.redirectTo || "",
        error: action.error,
      };
      break;
    }
    case USER_SIGNOUT_ACTION: {
      updatedUser = {
        ...state,
        token: "",
        username: "",
        email: "",
        displayname: "",
        redirectURL: "/",
      };
      return updatedUser;
    }
    default:
      break;
  }
  return updatedUser;
};

export default userReducer;
