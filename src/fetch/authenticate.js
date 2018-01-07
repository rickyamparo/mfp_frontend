const doSignIn = (email, password) => {
  return fetch('https://vast-wildwood-58678.herokuapp.com/authenticate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson
  })
  .catch((error) => {
    alert(error)
  })
}

export default doSignIn
