import './Input.css'

type InputProps = {
  label:string;
  value:number;
  maxVal:number;
  sign: "$" | "years" | "%" ;
  handler:(e:React.ChangeEvent<HTMLElement>) => void
}


export const Input = ({label,value, maxVal, sign, handler}:InputProps) => {

    
  return (
    <div className="input-wrapper">
        <label htmlFor={label}>{label}: <h3>{ sign == "$" && sign}<input type='number' min="1" max={maxVal} value={value} onChange={handler}/>{sign == "%" || sign=="years" && sign} </h3></label>
        <input id={label} type="range" value={value} min="1" max={maxVal} onChange={(e) => handler(e)} />
    </div>
  )
}
