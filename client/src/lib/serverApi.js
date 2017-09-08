const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const addProduct = (newProduct, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    body: JSON.stringify(newProduct),
    headers: headers,
    method: 'POST'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const deleteProduct = (id, callback) => {
  const options = {
    method: 'DELETE'
  }

  fetch(`/api/products/${id}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const updateProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    body: JSON.stringify(product),
    headers: headers,
    method: 'PUT'
  }

  fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct, deleteProduct, updateProduct}
