import './NumberBtn.css'
const NumberBtn = ({id}) => {

    const handleClick = () => {

    }

    return (
        <div className="btn" onClick={handleClick}>
            <span>{id}</span>
        </div>
    )
}
export default NumberBtn