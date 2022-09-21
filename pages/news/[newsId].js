// domain.com/news/important
import {useRouter} from "next/router"
const NewsId=()=>{

  const router = useRouter();
  const newsId= router.query.newsId;

// send a request to the backend API
// to fetch the news item with newsId

  console.log(newsId);
    return <h1>The Important Page!</h1>
  }
  
  export default NewsId;