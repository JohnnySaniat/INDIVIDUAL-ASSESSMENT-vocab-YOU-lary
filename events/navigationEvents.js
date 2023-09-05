import { signOut } from '../utils/auth';
import * as vocabularyData from '../api/vocabularyData';
import { emptyVocabulary, showVocabulary } from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#all-vocabulary').addEventListener('click', () => {
    vocabularyData.getVocabulary(user.uid).then(showVocabulary);
  });

  document.querySelector('#new-logout')
    .addEventListener('click', signOut);

  document.querySelector('#favorite-vocabulary').addEventListener('click', () => {
    vocabularyData.vocabularyByStarred(user.uid).then(showVocabulary);
  });

  document.querySelector('#filter-vocabulary').addEventListener('click', () => {
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
