import { gql, useQuery } from '@apollo/client'
import { Header } from './components/Header'
import { Lesson } from './components/Lesson'
import { Siderbar } from './components/Sidebar'
import { Video } from './components/Video'
import { Event } from './pages/Event'

function App() {
  return (
    <Event/>
  )
}

export default App








// useEffect(() => {
//   client.query({
//     query: GET_LESSONS_QUERY,
//   }).then(response => {
//     console.log(response.data)
//   })
// }, [])


// import { gql, useQuery } from '@apollo/client'
// import { useEffect } from "react"

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `

// interface Lesson {
//   id: string;
//   title: string;
// }

// function App() {
//   const {data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

//   return (
//     <ul>
//       {data?.lessons.map(lesson => {
//         return <li key={lesson.id}>{lesson.title}</li>
//       })}
//     </ul>
//   )
// }

// export default App