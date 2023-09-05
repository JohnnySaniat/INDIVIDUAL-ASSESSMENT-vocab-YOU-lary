import { getVocabulary, getSingleVocabulary, deleteVocabulary } from '../api/vocabularyData';
import { emptyVocabulary, showVocabulary } from '../pages/vocabulary';
// import viewVocabulary from '../pages/viewVocabulary';
import addVocabularyForm from '../components/forms/addVocabularyForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocabulary-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabulary(firebaseKey).then(() => {
          getVocabulary(user.uid).then((array) => {
            if (array.length) {
              showVocabulary(array);
            } else {
              emptyVocabulary();
            }
          });
        });
      }
    }
    if (e.target.id.includes('add-vocabulary-btn')) {
      addVocabularyForm(user.uid);
    }

    if (e.target.id.includes('edit-vocabulary-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabulary(firebaseKey).then((vocabularyObj) => addVocabularyForm(user.uid, vocabularyObj));
    }
    // if (e.target.id.includes('view-vocabulary-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   getVocabularyDetails(firebaseKey).then(viewVocabulary);
    // }
  });
};

export default domEvents;
