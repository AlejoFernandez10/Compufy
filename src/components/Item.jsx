import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, category, img }) => {
  return (
    <div>
          <div key={ id } >
            <div className="card"  style={{width:"300px"}}>
              <img srcSet={img} height="200px" style={{width:"200px", margin:"auto"}} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                
              </div>
              <ul className="list-group list-group-flush">
              <li className="list-group-item">{category}</li>
                <li className="list-group-item">{price}</li>
                
              </ul>
              <div className="card-body">
                
                <button className="btn btn-primary"> <Link to={`/item/${id}`} style={{color:"#fff", textDecoration:"none"}}>Details</Link> </button>
                
              </div>
          </div>
          </div>
    </div>
  )
}

export default Item