// import axios from 'axios';
// import { useQuery } from 'react-query';
// import './App.css';
// //import { useFecth } from './hooks/useFecth';

// type Repository = {
//   full_name: string;
//   description: string;
// }

// function App() {
//   // forma mais atual de chamar API pela pasta hooks
//   //const { data: repositories, isFetching } = useFecth<Repository[]>('users/diego3g/repos')
 
//   // const [repositories, setRepositories] = useState<Repository[]>([])
// //chamada de API com axios
//   // useEffect(() => {
//   //   axios.get('https://api.github.com/users/diego3g/repos')
//   //     .then(response => {
      
//   //       setRepositories(response.data)
//   //   })
//   // },[])

// //forma de chamar api sem axios
//   // useEffect(() => {
//   //   fetch('https://api.github.com/users/diego3g/repos')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       setRepositories(data)
//   //   })
//   // },[])


//   // chamada de API com react-query
//   const {data, isFetching} = useQuery<Repository[]>('repos', async() => {
//     const response = await axios.get('https://api.github.com/users/diego3g/repos');
    
//     return response.data;
//   })

//   return (
//     <ul>
//       { isFetching && <p>Carregando...</p>}
//       {data?.map(repo => {
//         return (
//           <li key={repo.full_name}>
//             <strong>{repo.full_name}</strong>
//             <p>{repo.description}</p>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

// export default App


import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { Repo } from "./pages/Repo";
import Repos from "./pages/Repos";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  )
}