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

const word = "despondent"
const fetchMERData = (word) => {
  
  const API_KEY = '9beda46b-4c74-4563-bcd0-a24cac9ad8c2';
  const base = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/?key=9beda46b-4c74-4563-bcd0-a24cac9ad8c2'

  const dicURl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`
    console.log(dicURl)
    
  fetch(dicURl)
    .then((results) => {
      return results.json()
    })
    .then((resultsJSON) => {
      console.log(resultsJSON)
      showDefinition(resultsJSON)
    })
}

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
      "782307": "When you're feeling the opposite of surprised, or: an alternative to deer caught in headlights",
      "436575": "A sky painted as dark as your feelings",
      "369627": "Is this hand real? Is it mine... or yours?",
      "36065": "You're sleepy, you sleep. A man with his priorities straight.",
      "399140": "A woman alone in a field, it's both literal and metaphorical",
      "436041": "In the story of Samson and Delilah, Delilah convinces Samson to share why he possesses 'God like' strength, when he reveals that it is actually due to his hair, she waits until he falls asleep and cuts it off. The Philistines come and are able to successfully kill him now that he is without strength. Malice, indeed.",
      "435876": "Madame Cézanne was the artis's wife. This is  obviously the look of a woman who does not believe the story of why that other woman is in your DMs",
    }
    const moodDescriptionDiv = document.querySelector('#description')
    moodDescriptionDiv.innerHTML = ''
    const moodDescription = document.createElement('p');
    moodDescription.innerText = moodDescriptions[moodOptions]
    moodDescriptionDiv.append(moodDescription)
  }


  const showDefinition = (word) => {
    // const definitions =
    // {
    //   "782307": "despondent"
    // }
  
    const moodDefinitionDiv = document.querySelector('#definition')
    moodDefinitionDiv.innerHTML = ''
    const moodDefinition = document.createElement('p');
    moodDefinition.innerText = word[0].shortdef
    moodDefinitionDiv.append(moodDefinition)
  }


  const button = document.querySelector('#get-artwork');
  button.addEventListener('click', (ev) => {
    ev.preventDefault();

    const moodOptions = document.querySelector('#select-mood').value;
    
    fetchMERData(word)
    // fetchMERData(moodOptions);
    fetchMETData(moodOptions);
    // fetchMERData(moodOptions);
    showDefinition(word)
    showMoodDescription(moodOptions);
  });






