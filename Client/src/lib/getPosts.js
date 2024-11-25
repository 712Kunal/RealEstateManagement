import apiRequest from "../lib/apiRequest";

const fetchTheData = async (setPosts, setError) => {
  try {
    const queryParams = window.location.href.split("?")[1];
    console.log(queryParams);

    if (queryParams) {
      // SEND THE QUERY TO THE BACKEND SERVER TO FETCH THE DATA
      const response = await apiRequest.get(`/posts/Posts?${queryParams}`);
      setPosts(response.data.AllPosts);
      console.log(response.data.AllPosts);
    } else {
      const response = await apiRequest.get("/posts");
      setPosts(response.data.AllPosts);
    }
  } catch (error) {
    console.error("Error while fetching the posts data:", error);
    setError(error.response.data.error);
  }
};

export default fetchTheData;
