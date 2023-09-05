import { getVocabulary, createVocabulary, updateVocabulary } from '../api/vocabularyData';
import { showVocabulary } from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocabulary')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        timeSubmitted: document.querySelector('#timeSubmitted').value,
        isStarred: document.querySelector('#isStarred').checked,
        uid: user.uid
      };

      createVocabulary(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabulary(patchPayload).then(() => {
          getVocabulary(user.uid).then(showVocabulary);
        });
      });
    }

    if (e.target.id.includes('update-vocabulary')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        timeSubmitted: document.querySelector('#timeSubmitted').value,
        isStarred: document.querySelector('#isStarred').checked,
        uid: user.uid,
        firebaseKey,
      };

      updateVocabulary(payload).then(() => {
        getVocabulary(user.uid).then(showVocabulary);
      });
    }
  });
};

export default formEvents;
