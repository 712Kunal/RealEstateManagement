import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Firebase.js";

const handleSubmitGoogleOAuth = async (navigate) => {

  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    if (result) {
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials.accessToken;

      // THE SIGNED IN USER INFO
      const user = result.user;

      // NAVIGATE THE USER TO THE HOMEPAGE
      navigate("/app/homepage");
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};

export default handleSubmitGoogleOAuth;
