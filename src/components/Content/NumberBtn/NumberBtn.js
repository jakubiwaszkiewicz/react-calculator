import './NumberBtn.css'
const NumberBtn = ({id, changeNumbers, numbers}) => {

    const handleClick = () => {
        if (numbers.length < 15) {
            changeNumbers(prevState => {
                return [...prevState, id]

        })
        }
    }

    return (
        <div className="btn" onClick={handleClick}>
            <span>{id}</span>
        </div>
    )
}
export default NumberBtn