import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // Add your Firebase configuration here
  // apiKey: "YOUR_API_KEY",
  // authDomain: "YOUR_AUTH_DOMAIN",
  // databaseURL: "YOUR_DATABASE_URL",
  // projectId: "YOUR_PROJECT_ID",
  // storageBucket: "YOUR_STORAGE_BUCKET",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  // appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const addCount = async () => {
  // Retrieve the current count from the database
  const countSnapshot = await database.ref('count').once('value');
  let currentCount = countSnapshot.val();

  // Increment the count by 1
  currentCount += 1;

  // Update the count in the database
  await database.ref('count').set(currentCount);
};

const FormTemplate = () => {
  return <button onClick={addCount}>add count</button>;
};

export default FormTemplate;
