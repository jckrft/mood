/*
1.working fetch request
  deserialize
  store json
2. connect button to fetch request
  query selector button
  add event listener
  get data using fetch
  extract important info
3. display info 
  where to store it
  query select location
  add element to hold data
  add data to the element
  append data to element to html
4. connect drop down list to api
  user selects from options
  options show met data
*/



const fetchMETData = (objectID) => {
  const metAPIUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;

  console.log('request');
  console.log(metAPIUrl);
  
  fetch(metAPIUrl)
      .then((res) => { return res.json() })
      .then((resJSON) => {
        console.log(resJSON);
        showMETData(resJSON);


      })
      .catch((err) => {
          console.error(err);
      })
}

const showMETData = (metData) => {
  console.log(metData)

  const metDataDiv = document.querySelector('#met-data');
  const artistName = document.createElement('p');
  const date = document.createElement('p');
  const artwork = document.createElement('img');

  artistName.innerText = metData.artistDisplayName
  date.innerText = metData.objectDate
  artwork.src = metData.primaryImage
  metDataDiv.append(artwork, artistName, date)
}
    
  const button = document.querySelector('#get-artwork');
  button.addEventListener('click', (ev) => {
    ev.preventDefault();

    const moodOptions = document.querySelector('#select-mood').value;
    // const objectURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${moodOptions}`
  
    fetchMETData(moodOptions);
  });




// }

