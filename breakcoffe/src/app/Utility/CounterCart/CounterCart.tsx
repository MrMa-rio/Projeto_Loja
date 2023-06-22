export const CounterCart = (setCount:Function, valueItem:string) =>{

    window.addEventListener('click', ({target}) => {
        if(target instanceof Element && target.matches(".CounterCart")){
            valueItem = localStorage.getItem('cart-items') || ''
            if(valueItem){
                setCount(JSON.parse(valueItem).length )
            }
        }
        
    })
}