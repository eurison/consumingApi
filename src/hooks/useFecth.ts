// import axios, { AxiosRequestConfig } from "axios"
// import { useEffect, useState } from "react"

// const api = axios.create({
//   baseURL: 'http://api.github.com'
// })

// export function useFecth<T = unknown>(url: string, options?: AxiosRequestConfig) {
//   const [data, setData] = useState<T | null>(null)
//   const [isFetching, setIsFetching] = useState(true)
//   const [error, setError] = useState<Error | null>(null)

//   useEffect(() => {
//     api.get(url, options)
//       .then(response => {
//         setData(response.data)
//       })
//       .finally(() => {
//         setIsFetching(false)
//       })
//       .catch(err => {
//         setError(err)
//       })
//   }, [])

//   return { data, error, isFetching }
// }
