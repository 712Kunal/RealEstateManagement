import apiRequest from "./apiRequest.js";

const listPageLoader = async ({ request, params }) => {
  try {
    console.log("listPageLoader called");
    console.log("request:", request);
    console.log("params:", params);
    const query = request.url.split("?")[1];

    // FETCH ALL THE POSTS USING LOADER FUNCTION BEFORE THE PAGE LOADS
    const res = await apiRequest.get(`/posts?${query}`);
    return res.data;
  } catch (error) {
    console.error("Error while fetching the data:", error);
    throw error;
  }
};

export { listPageLoader };
