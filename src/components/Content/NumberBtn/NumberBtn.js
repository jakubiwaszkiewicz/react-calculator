import './NumberBtn.css'
const NumberBtn = ({id, changeNumbers, firstNumbers}) => {

    const handleClick = () => {
        if (firstNumbers.length < 15) {
            changeNumbers(prevState => {
                return prevState + id

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