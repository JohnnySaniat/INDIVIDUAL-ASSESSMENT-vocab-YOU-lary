import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocabularyCard = (uid, item = {}) => {
  clearDom();
  const domString = `
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <p class="card-title">${item.title}</p>
    </div>
    <div class="flip-card-back">
      <p class="card-title">${item.description}</p>
        <hr>
      <h6 class="card-title"> <i class="fa fa-tag" aria-hidden="true"></i> ${item.category}</h6>
      <h6 class="card-title"> <i class="fa fa-calendar" aria-hidden="true"></i> ${item.dateSubmitted}</h6>
        <hr>
        <i id="edit-vocabulary-btn--${item.firebaseKey}" class=" btn btn-info">EDIT</i>
        <i id="delete-vocabulary-btn--${item.firebaseKey}" class="btn btn-danger">DELETE</i>
    </div>
    </div>`;

  renderToDOM('#form-container', domString);
};

export default viewVocabularyCard;
