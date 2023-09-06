import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocabularyCard = (uid, item = {}) => {
  clearDom();
  const domString = `
  <div class="card" id=vocabulary-card-single>
  <div class="card-body" style="height: 400px;">
    <h4 class="card-title">${item.title}</h4>
    <h6 class="card-title">${item.description}</h6>
      <hr>
    <h6 class="card-title"> <i class="fa fa-tag" aria-hidden="true"></i> ${item.category}</h6>
    <h6 class="card-title"> <i class="fa fa-calendar" aria-hidden="true"></i> ${item.dateSubmitted}</h6>
      <hr>
      <i class="btn btn-success" id="view-vocabulary-btn--${item.firebaseKey}">VIEW</i>
      <i id="edit-vocabulary-btn--${item.firebaseKey}" class=" btn btn-info">EDIT</i>
      <i id="delete-vocabulary-btn--${item.firebaseKey}" class="btn btn-danger">DELETE</i>
  </div>
  </div>`;

  renderToDOM('#form-container', domString);
};

export default viewVocabularyCard;
