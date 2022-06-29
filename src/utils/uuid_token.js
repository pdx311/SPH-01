import { v4 as uuidv4 } from 'uuid';
// 要生成一个随机的字符串，且每次执行不能生成变化，游客身份持久储存
export const getUUID = ()=>{
    // 先获取本地存储是否有 uuid 有就 不执行  没有就生成新的uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    // 如果没有
    if(!uuid_token){
        // 生成游客临时身份
        uuid_token = uuidv4();
        // 本地存储一次
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
    
}