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

  const metImageDiv = document.querySelector('#met-image');
  metImageDiv.innerHTML = ''
  const artwork = document.createElement('img');
  artwork.src = metData.primaryImageSmall
  metImageDiv.append(artwork)

  
  const metDataDiv = document.querySelector('#met-data');
  metDataDiv.innerHTML = ''

  const artistName = document.createElement('p');
  const title = document.createElement('p')
  const date = document.createElement('p');

  artistName.innerText = metData.artistDisplayName
  title.innerText = metData.title
  date.innerText = metData.objectDate
  metDataDiv.append(artistName, title, date)
  
}
    

const showMoodDescription = (moodOptions) => {
  const moodDescriptions =
    {
    "782307": "blah",
    "436575": "blahblah",
    "369627": "jnsdvikvs",
    "36065": "blahlbahlbh",
    "399140": "sdjaiegesjg",
    "436041": "hbsedhbgsegv",
    "435876": "fhbsuejbfiaue",
    }
    const moodDescriptionDiv = document.querySelector('#description')
    moodDescriptionDiv.innerHTML = ''
    const moodDescription = document.createElement('p');
    moodDescription.innerText = moodDescriptions[moodOptions]
    moodDescriptionDiv.append(moodDescription)
}

// const showMovieList = (moodOptions) => {
//   const movieOptions =
//   {
//     "The Killing of a Sacred Deer" : "782307",
//   }

//   const movieListDiv = document.querySelector('#movie-list')
//   const movieInfo = document.createElement('p');
//   movieInfo.innerText = movieOptions[moodOptions]
//   movieListDiv.append(movieInfo)
// }

  const button = document.querySelector('#get-artwork');
  button.addEventListener('click', (ev) => {
    ev.preventDefault();

    const moodOptions = document.querySelector('#select-mood').value;

//     const API_KEY = 'd3890d45';
//     const input = document.querySelector('#select-mood').value;
//     const base = 'http://www.omdbapi.com/?apikey=d3890d45&'
//     const poster = 'http://img.omdbapi.com/?apikey=d3890d45&'

//     fetch(`http://www.omdbapi.com/?s=${input}'&type=movie&apikey=${API_KEY}`)
//     .then((results) => {
//     return results.json()
//     })
//     .then((resultsJSON) => {
//       console.log(resultsJSON)
//       showMovieList(resultsJSON.Search)
// })
    
    
    
    fetchMETData(moodOptions);
    showMoodDescription(moodOptions);
    // showMovieList(moodOptions);
  });






