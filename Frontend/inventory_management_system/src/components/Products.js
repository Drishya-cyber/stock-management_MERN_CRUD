import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Products.css';

export default function Products() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();

      if (res.status === 201) {
        console.log("Data Retrieved.");
        setProductData(data);
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const deletedata = await response.json();
      if (response.status === 422 || !deletedata) {
        console.log("Error");
      } else {
        console.log("Product deleted");
        getProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='container-fluid p-5 products-page'>
        <h1 className='products-heading'>Products Inventory</h1>
        <div className='add-button'>
          <NavLink to="/insertproduct" className='btn btn-primary fs-5'>
            + Add New Product
          </NavLink>
        </div>
        <div className="overflow-auto mt-3 products-table-container" style={{ maxHeight: "38rem" }}>
          <table className="table table-striped table-hover mt-3 products-table">
            <thead>
              <tr className="tr-color">
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Barcode</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {productData.length > 0 ? (
                productData.map((element, id) => (
                  <tr key={id} className="product-row">
                    <th scope="row">{id + 1}</th>
                    <td>{element.ProductName}</td>
                    <td>{element.ProductPrice}</td>
                    <td>{element.ProductBarcode}</td>
                    <td>
                      <NavLink to={`/updateproduct/${element._id}`} className="btn btn-primary">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </NavLink>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => deleteProduct(element._id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  <tr className="placeholder-row">
                    <td colSpan="6" className="text-center text-muted">
                      No products added yet. Use the "Add New Product" button above to create a product.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Sample Product Name</td>
                    <td>Sample Price</td>
                    <td>Sample Barcode</td>
                    <td>
                      <button className="btn btn-secondary disabled">Update</button>
                    </td>
                    <td>
                      <button className="btn btn-secondary disabled">Delete</button>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
