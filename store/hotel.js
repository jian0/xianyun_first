export const state=()=>{
    return {
        cityarea:[],
        hotelList:[],
    }
}
export const mutations ={
    //单个城市里的区域
    setCityArea(state,data){
        state.cityarea = data;
    },
    //城市里的酒店
    setHotelList(state,data){
        state.hotelList = data;
    }
}
export const actions ={

}