import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import navigationEvents from '../events/navigationEvents';
import { getVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  navigationEvents(user);
  logoutButton();
  getVocabulary(user.uid).then((vocabulary) => showVocabulary(vocabulary));
};

export default startApp;
