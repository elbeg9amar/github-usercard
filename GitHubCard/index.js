/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/amar')
.then(response => {
cardMaker.appendChild(makeCard(response.data))
})
.catch(err => {
  console.log('This is error')
  debugger
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
const cardMaker = document.querySelector('.cards')


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function makeCard (obj) {
  const imgCard = document.createElement('img')
    imgCard.src = obj['avatar_url']

  const infoCard = document.createElement('div')
    infoCard.classList.add('card')

    const title = document.createElement('h3')
    title.textContent = obj.login
    title.classList.add('name')
    infoCard.appendChild(title)

    const userName = document.createElement('p')
    userName.textContent = obj.name
    userName.classList.add('username')
    infoCard.appendChild(userName)

    const userLocation = document.createElement('p')
    userLocation.textContent = `Location: ${obj['location']}`
    infoCard.appendChild(userLocation)

    const userProfile = document.createElement('p')
      const address = document.createElement('a')
      address.href = obj['url']
      address.textContent = obj['url']
      userProfile.appendChild(address)
    infoCard.appendChild(userProfile)

    const followers = document.createElement('p')
    followers.textContent = `Followers: ${obj['followers']}`
    infoCard.appendChild(followers)

    const following = document.createElement('p')
    following.textContent = `Following: ${obj['following']}`
    infoCard.appendChild(following)

    const bio = document.createElement('p')
    bio.textContent = `Bio: ${obj.bio}`
    infoCard.appendChild(bio)

    return imgCard, infoCard
}