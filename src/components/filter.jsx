import './filter.css'

export default function Filter(props) {
    const data = props.props
    const options = ()=> {
        const optionArray = []
        data.options.forEach(opt =>{
            optionArray.push(<option value={opt}>{opt.toUpperCase()}</option>)
        })
        return optionArray
    }
    return (
        <div className='filter'>
            <label htmlFor={data.name}>{data.name.toUpperCase()}</label>
            <select name={data.name} id={data.name}>
                {props && options()}
            </select>
        </div>
    )
}