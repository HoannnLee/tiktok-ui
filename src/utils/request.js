import axios from 'axios'

const request = axios.create({
    baseURL:'https://tiktok.fullstack.edu.vn/api/',
})


// async là trả về 1 promise , đằng sau thằng await sẽ là 1 promise và cách đọc code
// th async là code đồng bộ đọc từ trên xuống từng dòng
export const get = async (path, options = {}) =>{
    const respone = await request.get(path, options);
    return respone.data
}

export default request