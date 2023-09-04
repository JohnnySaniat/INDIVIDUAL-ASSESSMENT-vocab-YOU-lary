import { signOut } from '../utils/auth';
import * as vocabularyData from '../api/vocabularyData';
import { emptyVocabulary, showVocabulary } from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    vocabularyData.getVocabulary(user.uid).then(showVocabulary);
  });

  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#starred-vocabulary').addEventListener('click', () => {
    vocabularyData.vocabularyByStarred(user.uid).then(showVocabulary);
  });

  // TODO: AUTHORS BY FAVORITE
  document.querySelector('#vocabulary-webpack').addEventListener('click', () => {
    vocabularyData.vocabularyByCategory(user.uid).then(showVocabulary);
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
