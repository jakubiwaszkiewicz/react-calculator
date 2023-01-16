const OperatorBtn = ({id, changeOperator}) => {

    const handleClick = () => {
        changeOperator(id)
    }

    return (
        <div className="btn" onClick={handleClick}>
            <span>{id}</span>
        </div>
    )
}
export default OperatorBtn