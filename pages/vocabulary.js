import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabulary = () => {
  const domString = '<h1>No Vocabulary Cards Remaining</h1>';
  renderToDOM('#store', domString);
};

const showVocabulary = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add Vocabulary</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    domString += 'No Vocabulary Found';
  } else {
    array.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.isStarred ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success" id="view-book-btn--${item.firebaseKey}">VIEW</i>
            <i id="edit-book-btn--${item.firebaseKey}" class=" btn btn-info">EDIT</i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger">DELETE</i>
        </div>
        </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export { showVocabulary, emptyVocabulary };
