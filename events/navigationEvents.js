import { signOut } from '../utils/auth';
import * as vocabularyData from '../api/vocabularyData';
import { emptyVocabulary, showVocabulary } from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    vocabularyData.getVocabulary(user.uid).then(showVocabulary);
  });

  document.querySelector('#new-logout')
    .addEventListener('click', signOut);

  document.querySelector('#webpack-vocabulary').addEventListener('click', () => {
    vocabularyData.vocabularyByWebpack(user.uid).then(showVocabulary);
  });

  document.querySelector('#javascript-vocabulary').addEventListener('click', () => {
    vocabularyData.vocabularyByJavascript(user.uid).then(showVocabulary);
  });

  document.querySelector('#html-vocabulary').addEventListener('click', () => {
    vocabularyData.vocabularyByHTML(user.uid).then(showVocabulary);
  });

  document.querySelector('#css-vocabulary').addEventListener('click', () => {
    vocabularyData.vocabularyByCSS(user.uid).then(showVocabulary);
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      vocabularyData.searchVocabulary(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showVocabulary(search);
          } else {
            emptyVocabulary();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
