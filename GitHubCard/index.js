/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/kasech-isaac')
.then((response)=>{
let theCard=githubCard(response.data)
newCard.appendChild(theCard)
// console.log(response)
})
.catch((error)=>{
  console.log('no info:', error)
})

axios.get('https://api.github.com/users/tetondan')
.then((response)=>{
let theCard=githubCard(response.data)
newCard.appendChild(theCard)
// console.log(response)
})
.catch((error)=>{
  console.log('no info:', error)
})

axios.get('https://api.github.com/users/dustinmyers')
.then((response)=>{
let theCard=githubCard(response.data)
newCard.appendChild(theCard)
// console.log(response)
})
.catch((error)=>{
  console.log('no info:', error)
})

axios.get('https://api.github.com/users/bigknell')
.then((response)=>{
let theCard=githubCard(response.data)
newCard.appendChild(theCard)
// console.log(response)
})
.catch((error)=>{
  console.log('no info:', error)
})




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

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

// const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd',  'bigknell'];

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


function githubCard(object){
  
  const card= document.createElement('div')
  card.classList.add('card')

  const imag= document.createElement('img')

  const cardInfo= document.createElement('div')
  cardInfo.classList.add('name')


  const userName = document.createElement('p')
  userName.classList.add('username')


  const name= document.createElement('h3')
  name.classList.add('name')

  const location = document.createElement('p')

  const Profile= document.createElement('p')
  const link= document.createElement('a')
  const followers= document.createElement('p')
  const following =document.createElement('p')
  const userBio =document.createElement('p')


    imag.src=object.avatar_url;
    name.textContent=object.name;
    userName.textContent=object.login;
    location.textContent=(`location: ${object.location}`);
    Profile.textContent=(`profile: ${link}`)
    link.textContent=object.html_url;
    followers.textContent=(`followers: ${object.followers}`);
    following.textContent=(`following: ${object.following}`)
    userBio.textContent=(`bio: ${object.bio}`)

card.appendChild(imag);
card.appendChild(cardInfo);
card.appendChild(name);
card.appendChild(userName);
card.appendChild(location);
card.appendChild(Profile);
card.appendChild(followers);
card.appendChild(following);
card.appendChild(userBio);
card.appendChild(link);

return card;
}
let newCard =document.querySelector('.cards');