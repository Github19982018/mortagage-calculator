
type TextboxProps = {
  label:string;
  sublabel:string;
}

export const Textbox = ({label, sublabel}:TextboxProps) => {
  return (
    <div>
        <p>{label}</p>
        <h1>{sublabel}</h1>
    </div>
  )
}
