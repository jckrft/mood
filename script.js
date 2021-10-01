const fetchMETData = () => {
  const metAPIUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

  fetch(metAPIUrl)
      .then((res) => { return res.json() })
      .then((resJSON) => {
          console.log(resJSON);

      })
      .catch((err) => {
          console.error(err);
      })
}

fetchMETData()