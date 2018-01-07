const getData = (user_id, auth_token, action) => {
  return fetch(`https://vast-wildwood-58678.herokuapp.com/api/v1/business_intelligence/${action}?user_id=${user_id}`, {
    headers: {
      Authorization: auth_token
    }
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson
  })
}

export default getData
