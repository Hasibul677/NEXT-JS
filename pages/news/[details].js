import { useRouter } from "next/router";
import { Fragment } from "react";

function Details() {
  const router = useRouter();
  const details = router.query.details;
  console.log(details);
  return (
    <Fragment>
      <h1>Details Component</h1>
    </Fragment>
  );
}
export default Details;
