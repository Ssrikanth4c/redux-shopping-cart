import React from 'react';

export default function SingleItem(props) {
    const {data, addToCart}=props
    return (
        <div>
             <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.category}</td>
                    <td><img src={data.img} alt={data.name} width="100" height="100" /></td>
                    {
                        addToCart ?<td><button onClick={() => addToCart(data.id)} className="btn btn-outline-secondary">Add to Cart</button></td>
                        :<td></td>
                    }
                </tr>
                </tbody>
            </table>
        </div>
    )
}
