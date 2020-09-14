import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    const users = await jsonPlaceholder.get("/users");
    console.log(response.data);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};
