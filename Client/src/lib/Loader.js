import apiRequest from "./apiRequest.js";

const listPageLoader = async ({ request, params }) => {
  try {
    console.log("Request url:", request.url);
    console.log("kdkjkdls");
    
  } catch (error) {
    console.error("error while fetching the data", error);
  }
};

export { listPageLoader };
