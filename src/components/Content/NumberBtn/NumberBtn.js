import './NumberBtn.css'
const NumberBtn = ({id, changeFirstNumbers, firstNumbers, secondNumbers, changeSecondNumbers, operator}) => {

    const handleClick = () => {
        if (operator === "" && firstNumbers.length < 15) {
            changeFirstNumbers(prevState => {
                return prevState + id

            })
        } if (operator !== "" && secondNumbers.length < 15) {
            changeSecondNumbers(prevState => {
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