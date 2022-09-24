import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Product from "./product";


// domain.com/news
const NewsPage = (props) => {

  return (
    <Fragment>
      <h1>Products Page</h1>
      <div>
        {props.posts.map(product=> <Product key={product.id} product={product}/>)}
      </div>
    </Fragment>
  );
};

export async function getStaticProps(){
  // fetch data from an API
  const res = await fetch('https://dummyjson.com/users')
  const posts = await res.json();

  return {
    props:{
     posts: posts.users
    }
  }
}

export default NewsPage;
