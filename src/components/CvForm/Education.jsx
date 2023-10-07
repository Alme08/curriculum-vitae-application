function Education({educations, handleExpand, isExpand, handleAddEducation}) {
    const edit = educations.find(education => education.edit === true);
    return(
        <div>
            <button className={!isExpand ? 'educationSection' : 'educationSection open' } id="education" onClick={handleExpand}>Education 
            <i id="education" className={!isExpand ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-down open' }></i></button>
            {isExpand && 
            <div className="sectionOpen">                
                {edit ? 
                    <div key={edit.id}>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <div>
                            <button>Delete</button>
                            <button>Cancel</button>
                            <button>Save</button>
                        </div>
                    </div> : 
                    <>
                        {educations.map((education) => {
                            return <button key={education.id}>{education.university}</button>
                        })}
                        <button className="addEducation" onClick={handleAddEducation}>+ Education</button>
                    </>
                }
            </div>}
        </div>
    )
}

export default Education;