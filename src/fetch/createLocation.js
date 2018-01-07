const sendLocation = (userId, latitude, longitude, authToken) => {
  return fetch('https://vast-wildwood-58678.herokuapp.com/locations', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authToken
    },
    body: JSON.stringify({
      location:{
        latitude: latitude,
        longitude: longitude,
        user_id: userId
      }
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    alert(responseJson.created_at)
  })
  .catch((error) => {
    alert(error)
  })
}

export default sendLocation
