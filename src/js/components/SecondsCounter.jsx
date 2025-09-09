export const SecondsCounter =(props)=>{

const{numberOne} = props

    return(
        <div className="clock">
          <div><i class="fa-solid fa-clock"></i></div>
          <div>{Math.floor(numberOne / 100000) % 10 }</div>
          <div>{Math.floor(numberOne / 10000) % 10 }</div>
          <div>{Math.floor(numberOne / 1000) % 10 }</div>
          <div>{Math.floor(numberOne / 100) % 10 }</div>
          <div>{Math.floor(numberOne / 10) % 10 }</div>
          <div>{(numberOne / 1) % 10 }</div>
        </div>
    )
}