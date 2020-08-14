//直接更新state的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATAGEORYS,
    RECEIVE_SHOPS
} from './mutation-types'
export default{
    [RECEIVE_ADDRESS](state,{address}){
        state.address=address
    },
    [RECEIVE_CATAGEORYS](state,{categorys}){
        state.categorys=categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops=shops
    }

}