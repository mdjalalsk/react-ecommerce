import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;








// // this code for My api 

// import React from "react";
// import { NavLink } from "react-router-dom";
// import FormatPrice from "../Helpers/FormatPrice";


// const Product = (curElem) => {
//     // console.log(curElem);
//   const { images, id, title } = curElem;

// //   const myImage = require(`../assets/products/${images}`);
// //   const myImage = require(`../assets/products/${images}`);

//   return (
//     <NavLink to={`/singleproduct/${id}`}>
//       <div className="card">
//         <figure>
//           <img src={`./products/${images}`} alt={title} />
//           {/* <figcaption className="caption">{category}</figcaption> */}
//         </figure>

//         <div className="card-data">
//           <div className="card-data-flex">
//             <h3>{title}</h3>
//             {/* <p className="card-data--price">{price}</p> */}
//             {/* <p className="card-data--price">{<FormatPrice price={pprice} />}</p> */}
//           </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default Product;
// // ***avobe my api****