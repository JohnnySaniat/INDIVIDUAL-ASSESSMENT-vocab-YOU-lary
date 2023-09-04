import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Vocab Lab</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="Create Vocabulary">
                Add Vocabulary <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="all-vocabulary">All Vocabulary</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="filter-vocabulary">Vocabulary by Category</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#" id="placeholder">Placeholder</a>
          </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Vocabulary"
              aria-label="Search"
            />
            </li>
          </ul>
          <button type="button" class="btn btn-danger">Logout</button>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
