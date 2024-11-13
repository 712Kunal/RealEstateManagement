import apiRequest from "./apiRequest.js";

const listPageLoader = async ({ request, params }) => {
  try {
      console.log("kdkjkdls");
    console.log("Request url:", request.url);
  } catch (error) {
    console.error("error while fetching the data", error);
  }
};

export { listPageLoader };
