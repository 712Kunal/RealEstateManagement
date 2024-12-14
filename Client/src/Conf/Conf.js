const conf = {
  FireBaseApiKey: String(import.meta.env.VITE_FIREBASE_APIKEY),
  FireBaseAuthDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  FireBaseProjectId: String(import.meta.env.VITE_FIREBASE_PROJECTID),
  FireBaseStorageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  FireBaseMessagingSenderId: String(
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID
  ),
  FireBaseAppId: String(import.meta.env.VITE_FIREBASE_APPID),
  FireBaseMeasurementId: String(import.meta.env.VITE_FIREBASE_MEASUREMENTID),
};

export default conf;
