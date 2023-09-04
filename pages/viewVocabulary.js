import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const viewVocabulary = (obj) => {
  clearDom();
  const domString = `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <div class="mt-5">
         <i id="edit-vocabulary-btn--${obj.firebaseKey}" class=" btn btn-info">EDIT</i>
         <i id="delete-vocabulary-btn--${obj.firebaseKey}" class="btn btn-danger">DELETE</i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <h5>${obj.title} by ${obj.description} ${obj.isStarred ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
       <p>${obj.description || ''}</p>
       <hr>   
        </div>
      </div>`;
  renderToDOM('#view', domString);
};
export default viewVocabulary;
