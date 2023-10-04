function Education({educations, handleExpand, isExpand, handleAddEducation}) {
    return(
        <>
            <button id="education" onClick={handleExpand}>Education</button>
            {isExpand && 
            <>
                {educations.map((education) => {
                    return(
                        <button key={education.id}>{education.university}</button>
                    )
                })}
                <button onClick={handleAddEducation}>+ Education</button>
            </>}
        </>
    )
}

export default Education;