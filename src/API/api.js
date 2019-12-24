import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '08ed710d-07d6-4700-a583-087538191af2',
    }
})

export const usersAPI = {
    getUsers (currentPage =1,pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true,
            })
            .then(response=> {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    me(){
        return instance.get(`auth/me`)
    }
};
export const  getNews = ( language = 'us') =>{
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${language}&apiKey=f59a7b8bb2434e739e0bb1a119cae542`).
    then(response => {
        return response.data
    })
};
export  const profileApi = {
    profileData(userId){
            return instance.get(`profile/`+ userId).then(response=>{
                return response.data})
    },
    getStatus(userId){
        return instance.get(`/profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`/profile/status`,{
            status:status,
        });
    },
    loginServe(email,password,rememberMe=false,capture=true){
        return instance.post(`/auth/login`,{email,password,rememberMe,capture})
    },
    logout(){
        return instance.delete(`auth/login`);
    }

}

