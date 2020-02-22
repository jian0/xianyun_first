export const state=()=>{
    return {
        oneCity:{
            scenics:[]
        },
        hotelList:{
            data:[],
        },
    }
}
export const mutations ={
    //单个城市里的区域
    setOneCity(state,data){
        state.oneCity = data;
    },
    //城市里的酒店
    setHotelList(state,data){
        state.hotelList = data;
    }
}
export const actions ={

}