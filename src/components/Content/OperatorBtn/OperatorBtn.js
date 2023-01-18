import "./OperatorBtn.css"
const OperatorBtn = ({id, changeOperator, operator}) => {

    const handleClick = () => {
        changeOperator(id)
    }

    return (
        <div className={operator.includes(id) ? "btn active" : "btn"} onClick={handleClick}>
            <span>{id}</span>
        </div>
    )
}
export default OperatorBtn