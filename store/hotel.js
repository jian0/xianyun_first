export const state=()=>{
    return {
        oneCity:{
            scenics:[]
        },
        hotelList:{
            data:[],
        },
        cityId:'',
        startTime:'',
        endTime:'',
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
    },
    //cityid存着，直接用，因为每次请求都要佩戴的它
    setCityId(state,data) {
        state.cityId = data;
    },
    setStartTime(state,data){
        state.startTime=data
    },
    setEndTime(state,data){
        state.endTime=data
    }
}
export const actions ={

}