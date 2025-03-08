export default function randomArray(length){
    let arr = [];
    for(let i=0; i<length; i++){
        arr.push(Math.round(Math.random()*100))
    }
    return arr;
}