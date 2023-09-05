import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
// import selectCategory from './selectCategoryForm';

const addVocabularyForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocabulary--${obj.firebaseKey}` : 'submit-vocabulary'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocabulary Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabularyTitle" placeholder="Enter Vocabulary Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Vocabulary Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="timeSubmitted">Time Submitted</label>
        <input type="text" class="form-control" id="timeSubmitted" placeholder="Enter the Time" value="${obj.timeSubmitted || ''}" required>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Vocabulary Category" value="${obj.category || ''}" required>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="isStarred" ${obj.isStarred ? 'checked' : ''}>
        <label class="form-check-label" for="isStarred">Want to add as a Favorite?</label>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-vocabulary-btn">Submit Vocabulary
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabularyForm;
