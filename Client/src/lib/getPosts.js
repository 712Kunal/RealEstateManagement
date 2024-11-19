import apiRequest from "../lib/apiRequest";

const fetchTheData = async (setPosts, setError) => {
  try {
    const queryParams = window.location.href.split("?")[1];

    if (queryParams) {
      // SEND THE QUERY TO THE BACKEND SERVER TO FETCH THE DATA
      const response = await apiRequest.get(`/posts/Posts?${queryParams}`);
      console.log("response:", response.data);
      setPosts(response.data.AllPosts);
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
