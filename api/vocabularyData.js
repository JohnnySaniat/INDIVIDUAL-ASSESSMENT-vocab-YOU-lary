import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabulary = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocabulary = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const vocabularyByWebpack = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="category"&equalTo="Webpack"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const vocabularyByJavascript = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="category"&equalTo="Javascript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const vocabularyByHTML = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="category"&equalTo="HTML"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const vocabularyByCSS = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabulary.json?orderBy="category"&equalTo="CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const searchVocabulary = (searchValue, uid) => new Promise((resolve, reject) => {
  getVocabulary(uid).then((vocabularyArray) => {
    const searchResults = vocabularyArray.filter((vocabulary) => (
      vocabulary.title.toLowerCase().includes(searchValue)
      || vocabulary.description.toLowerCase().includes(searchValue)
    ));
    resolve(searchResults);
  }).catch(reject);
});

export {
  getVocabulary,
  createVocabulary,
  vocabularyByWebpack,
  vocabularyByJavascript,
  vocabularyByHTML,
  vocabularyByCSS,
  deleteVocabulary,
  getSingleVocabulary,
  updateVocabulary,
  searchVocabulary,
};
