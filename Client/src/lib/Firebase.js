import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import conf from "../Conf/Conf.js";

const firebaseConfig = {
  apiKey: conf.FireBaseApiKey,
  authDomain: conf.FireBaseAuthDomain,
  projectId: conf.FireBaseProjectId,
  storageBucket: conf.FireBaseStorageBucket,
  messagingSenderId: conf.FireBaseMessagingSenderId,
  appId: conf.FireBaseAppId,
  measurementId: conf.FireBaseMeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
