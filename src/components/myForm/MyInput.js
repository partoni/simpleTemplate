

export const MyInput = (props)=>{

    const {error,label,handleChange,...inputProps} = props

    return (
        <>
        <label>
            <p>{label}</p>
            <input {...inputProps} onChange = {handleChange}></input>
        </label>
        {inputProps.isError&&<span>{error}</span>}
        
        </>
    )
}