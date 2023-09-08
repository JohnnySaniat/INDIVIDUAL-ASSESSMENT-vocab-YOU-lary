import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import navigationEvents from '../events/navigationEvents';
import { getVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import loginButton from '../components/loginButton';

const startApp = (user) => {
  loginButton();
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar(user);
  logoutButton();
  navigationEvents(user);
  getVocabulary(user.uid).then((vocabulary) => showVocabulary(vocabulary));
};

export default startApp;
