import jsonPlaceholder from "../apis/jsonPlaceholder";
const _ = require("lodash");

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const users = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: users.data });
  };
};

export const fetchPostAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach((id) => dispatch(fetchUser(id)));
  };
};
