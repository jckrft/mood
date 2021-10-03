const fetchMETData = (objectID) => {
  const metAPIUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;

  console.log('request');
  console.log(metAPIUrl);
  
  fetch(metAPIUrl)
      .then((res) => { return res.json() })
      .then((resJSON) => {
          console.log(resJSON);

      })
      .catch((err) => {
          console.error(err);
      })
}

const button = document.querySelector('#get-artwork');
button.addEventListener('click', (ev) => {
  ev.preventDefault();

  const moodOptions = document.querySelector('#select-mood').value;
  const objectURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${moodOptions}`
  
  fetchMETData("782307");
});





