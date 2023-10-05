function Education({educations, handleExpand, isExpand, handleAddEducation}) {
    return(
        <>
            <button id="education" onClick={handleExpand}>Education</button>
            {isExpand && 
            <>
                {educations.map((education) => {
                    return education.edit === false ? <button key={education.id}>{education.university}</button> :
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <div>
                            <button>Delete</button>
                            <button>Cancel</button>
                            <button>Save</button>
                        </div>
                    </div>
                    
                })}
                <button onClick={handleAddEducation}>+ Education</button>
            </>}
        </>
    )
}

export default Education;