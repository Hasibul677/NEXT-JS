import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Product(product) {
  const { id, domain, firstName, gender } = product.product;
  const route = useRouter();
  const handleClick = () => {
    route.push("/news/" + id);
  };

  return (
    <Fragment>
      <div>{domain}</div>
      <div className="d-flex align-items-center">
        <small className="fs-6 fw-bold">({gender})</small>
      </div>
      <button onClick={handleClick}>see details</button>
    </Fragment>
  );
}
export default Product;
