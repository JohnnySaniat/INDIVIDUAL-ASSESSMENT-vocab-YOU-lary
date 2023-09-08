import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabulary = () => {
  const domString = '<h1>No Vocabulary Cards Remaining</h1>';
  renderToDOM('#store', domString);
};

const showVocabulary = (array) => {
  clearDom();

  let domString = '';
  if (array.length < 1) {
    domString += 'No Vocabulary Found';
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body" style="height: 400px;">
          <h4 class="card-title">${item.title}</h4>
          <h6 class="card-title">${item.description}</h6>
            <hr>
          <h6 class="card-title"> <i class="fa fa-tag" aria-hidden="true"></i> ${item.category}</h6>
          <h6 class="card-title"> <i class="fa fa-calendar" aria-hidden="true"></i> ${item.dateSubmitted}</h6>
            <hr>
            <i class="btn btn-success" id="view-vocabulary-btn--${item.firebaseKey}">STUDY</i>
            <i id="edit-vocabulary-btn--${item.firebaseKey}" class=" btn btn-info">EDIT</i>
            <i id="delete-vocabulary-btn--${item.firebaseKey}" class="btn btn-danger">DELETE</i>
        </div>
        </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export { showVocabulary, emptyVocabulary };
