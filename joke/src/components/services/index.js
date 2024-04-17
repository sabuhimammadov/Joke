import { baseURL } from "../../constant"
import axios from "axios"
export const getJokes = async (p) => {
    try {
        const params = {
            limit: 15,
            page:p
        }
        const res = await axios({ method: "GET", baseURL, params,headers:{"Accept":"application/json"} })
        return res
    } catch (err) {
        console.log(err.message)
    }
}