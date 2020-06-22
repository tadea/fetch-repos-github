const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const bioContainer = document.querySelector(".main__profile-bio");
const followersContainer = document.querySelector(".main__profile-followers");
const followingContainer = document.querySelector(".main__profile-following");

const client_id = "Iv1.ff1ff4b2374e8137";
const client_secret = "2bebafba0f31f9dbbcc8c8015bde62d7255535e8";

const fetchUsers = async (user) => {
  const api_call = await fetch(
    `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
  );

  const data = await api_call.json();
  return { data };
};

const showData = () => {
  fetchUsers(inputValue.value).then((response) => {
    console.log(response);
    nameContainer.innerHTML = `Name: <span class="main__profile-value">${response.data.name}</span>`;
    unContainer.innerHTML = `Username: <span class="main__profile-value">${response.data.login}</span>`;
    followersContainer.innerHTML = `Followers: <span class="main__profile-value">${response.data.followers}</span>`;
    followingContainer.innerHTML = `Following: <span class="main__profile-value">${response.data.following}</span>`;
    reposContainer.innerHTML = `Repos: <span class="main__profile-value">${response.data.public_repos}</span>`;
    urlContainer.innerHTML = `URL: <span class="main__profile-value">${response.data.html_url}</span>`;
    bioContainer.innerHTML = `Bio: <span class="main__profile-value">${response.data.bio}</span>`;
    image.src = `${response.data.avatar_url}`;
  });
};
searchButton.addEventListener("click", () => {
  showData();
});
