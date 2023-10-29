import React from 'react'
import ArticleList from '../components/ArticleList';


export default function({articles}){
  console.log(articles)
  const x = 10;
  return(
    <div className="">
      <h1>about</h1>
      <h2 className='about'>about.jsx</h2>
      <section>
        <ArticleList articles={articles}/>
      </section>


      <style jsx>
        {`
          .about{
            color: ${x==0 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}

