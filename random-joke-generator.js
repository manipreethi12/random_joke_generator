// Random Joke Generator using icanhazdadjoke API

async function getRandomJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json' }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch a joke');
  }
  const data = await response.json();
  return data.joke;
}

// Example usage:
getRandomJoke()
  .then(joke => {
    console.log("Here's a random joke for you:");
    console.log(joke);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });
