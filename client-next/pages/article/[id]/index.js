import React from 'react'
import {useRouter} from "next/router"
import Link from 'next/link'

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
  return (
    <>
    <div>article Test {article.id}</div>
    <div>{article.title}</div>
    <Link href="/about">Go back</Link>
    </>
  )
}

// fetch on request
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article 
//         }
//     }
// }

// fetch on buildtime, need getStaticPaths
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()
  return {
      props: {
          article 
      }
  }
}

export const getStaticPaths = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  // tujuannya gini
  // return{
  //   paths: {params: {id: "1"}}
  // }

  return {
    paths,
    fallback: false,
  }
}

export default article