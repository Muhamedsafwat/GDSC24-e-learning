import axios from "axios"
import { useQuery } from "react-query"
export function getProduct(){
    // return axios.get('http://localhost:8000/products')
    return axios.get('http://localhost:3000/products')
}
// export function getspecificProduct(id){
//     return axios.get(`http://localhost:8000/products/${id}`)
// }
export function useGet(k,fn){
    return useQuery(k,fn,{ select: (data) =>data?.data})
}