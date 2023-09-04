import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import client from './client';
import startApp from './startApp';
import logoutButton from '../components/logoutButton';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logoutButton();
      startApp();
    } else {
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
