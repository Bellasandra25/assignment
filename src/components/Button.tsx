const Button = ({label, onClick}:{label: string; onClick:()=>void;}) => {
  return (
    <div>
      <button className="px-4 py-2 bg-black text-white rounded border-none mt-9 hover:bg-slate-950" onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
