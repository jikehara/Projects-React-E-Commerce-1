// utility method for generic ajax requests
const ajaxRequest = (method, url, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    body: JSON.stringify(body),
    headers: headers,
    method: method,
    credentials: 'include'
  }

  return fetch(url, options)
    .then(response => response.json())
    .then(json => (json.data))
    .catch(err => console.log(err))
}

const getAllProducts = () => ajaxRequest('GET', '/api/products')

const addProduct = (newProduct) => ajaxRequest('POST', '/api/products', newProduct)

const deleteProduct = (id) => ajaxRequest('DELETE', `/api/products/${id}`)

const updateProduct = (product) => ajaxRequest('PUT', `/api/products/${product._id}`, product)

const signUpUser = (user) => ajaxRequest('POST', '/api/signup', user)

const logInUser = (email, password) => ajaxRequest('POST', '/api/login', {email, password})

const getUser = () => ajaxRequest('GET', '/api/get_user')

const logoutUser = () => ajaxRequest('GET', '/api/logout')

export {getAllProducts, addProduct, deleteProduct, updateProduct, signUpUser, logInUser, getUser, logoutUser}
