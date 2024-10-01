import './TertiaryBtn.css'





const TertiaryBtn = (props) => {
    return (
        <div className="tertiary-btn">
            <span className='btn-text'>{props.children}</span>
        </div>
    )
}

export default TertiaryBtn
