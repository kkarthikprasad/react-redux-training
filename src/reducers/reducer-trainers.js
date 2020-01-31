/*
Reducers are peace of code/functions to persist data in store
we can have multiple reducers  called Combined Reducers

 * The users reducer will always return an array of users no matter what
 * You need to return something, 
 so if there are no users then just return an empty array
 * */

import data  from '../store/store'
export default (state=null, action)=> {
    // returning initial state of trainer list
        return state=data;  // Mocked data
}





/*
export interface ITrainer{
    id:number
    first: string
    last: string
    age: number,
    description: string
    thumbnail: string
}
*/