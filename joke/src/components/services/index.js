import { baseURL } from "../../constant"
import axios from "axios"
export const getJokes = async () => {
    try {
        const params = {
            limit: 15
        }
        const res = await axios({ method: "GET", baseURL, params,headers:{"Accept":"application/json"} })
        return res
    } catch (err) {
        console.log(err.message)
    }
}