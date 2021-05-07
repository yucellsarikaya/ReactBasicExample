import * as actionTypes from "./actionTypes"

export const increaseCounter = () =>({
     type : actionTypes.INCREASE_COUNTER, //fonksiyonun aciton tipi
     payload : 1 
})

export const decreaseCounter = () =>({ //cagirlan fonk
    type : actionTypes.DECREASE_COUNTER, //giden nesne
    payload : 1  //giden deger
})

export const increaseByTwoCounter = () =>({
    type : actionTypes.INCREASE_BY_TWO_COUNTER,
    payload : 2 
})

//actionlarin tanimlari yapildi