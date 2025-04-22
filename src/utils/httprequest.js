import axios from 'axios'

const httpRequest = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
})


// async là trả về 1 promise , đằng sau thằng await sẽ là 1 promise và cách đọc code
// th async là code đồng bộ đọc từ trên xuống từng dòng
export const get = async (path, options = {}) =>{
    const respone = await httpRequest.get(path, options);
    return respone.data
}

export default httpRequest