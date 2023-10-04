function Input({name, placeholder, onChange, id, value, label, span}){
    return(
        <>
        <label htmlFor={name}>{label}</label><span>{span}</span>
        <input type="text" name={name} id={id} placeholder={placeholder} onChange={onChange} value={value}/>
        </>
    )
}

export default Input