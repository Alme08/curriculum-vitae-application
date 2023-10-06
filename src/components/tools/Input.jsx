function Input({type, name, placeholder, onChange, id, value, label, span, dataset}){
    return(
        <div>
            <label htmlFor={name}>{label}<span>{span}</span></label>
            <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value} data-field={dataset}/>
        </div>
    )
}

export default Input