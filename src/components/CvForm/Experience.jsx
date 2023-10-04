function Experience({handleExpand, isExpand}) {
    return(
        <>
            <button id="experience" onClick={handleExpand}>Experience</button>
            {isExpand && <p>Experience</p>}
        </>
    )
}

export default Experience;