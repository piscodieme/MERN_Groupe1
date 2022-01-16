import React from 'react'


const CreateProductForm = () => {
  return (
    <>
      <form>
          <div>
              <label>Product Name</label>
              <input
                name="productName"
                type="text"
                id='ProductName'
                value=""
              />
          </div>
          <div>
              <label>Product Name</label>
              <input
                name="productPrice"
                type="number"
                id='ProductPrice'
                value=""
              />
          </div>
          <div>
              <label>Product Name</label>
              <input
                name="productName"
                type="text"
                id='productName'
                value=""
              />
          </div>
      </form>
    </>
  )
}

export default CreateProductForm
