const registerUser = (email, name, password, passwordConfirmation) => {
  return fetch('https://vast-wildwood-58678.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user:{
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    alert("Your account has been created! Please head back to login.")
  })
  .catch((error) => {
    alert('Something was wrong with those credentials, Please try again')
    console.log(error)
  })
}

export default registerUser
