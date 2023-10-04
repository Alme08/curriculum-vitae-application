function Education({handleExpand, isExpand}) {
    return(
        <>
            <button id="education" onClick={handleExpand}>Education</button>
            {isExpand && <p>Education</p>}
        </>
    )
}

export default Education;