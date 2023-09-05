import { getVocabulary } from '../../api/vocabularyData';
import renderToDOM from '../../utils/renderToDom';

const selectCategory = (category, uid) => {
  let domString = `<label for="category">Select a Category</label>
    <select class="form-control" id="category" required>
    <option value="">Select a Category</option>`;

  getVocabulary(uid).then((vocabularyArray) => {
    vocabularyArray.forEach((vocabulary) => {
      domString += `
          <option 
            value="${vocabulary.firebaseKey}" 
            ${category === category.firebaseKey ? 'selected' : ''}>
              ${category}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
