import {server} from '../config'
import ArticleList from '../components/ArticleList'
import gridStyle from '../styles/Grid.module.css'
import Link from 'next/link'
import Form from '../components/Form'
import { useState } from 'react'
import VideoForm from '../components/Video-Form'
import VideoPage from '../components/Video'



export default function Home({articles}) {
  const [formData, setFormData] = useState({});
  return (
    <div>
      
      <VideoForm></VideoForm>
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }