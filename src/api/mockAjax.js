// 对axios进行二次封装
import axios from 'axios'

// 引入进度条
import nprogress from 'nprogress';
// start:进度条开始   done：进度条结束
// 引入进度条样式
import "nprogress/nprogress.css"

// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    // 配置对象
    baseURL:'/mock',    
    timeout:5000,//请求超时时间5秒
})
// 请求拦截器：在发请求之前，请求拦截器可以监测到，可以在请求发出之前做一些事情

requests.interceptors.request.use((config)=>{
    // config:配置对象里面有一个属性很重要，headers请求头
    // 进度条开始start()
    nprogress.start()
    return config
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
// 服务器成功的回调函数：服务器响应数据回来以后，响应拦截器可以监测到，可以做一些事情
// 进度条结束done()
nprogress.done()
return res.data;
},(error)=>{
    return Promise.reject(new Error('faile'))
})


export default requests