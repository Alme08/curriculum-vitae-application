import Input from "../tools/Input";

function Education({educations, handleExpand, isExpand, handleAddEducation, handleCancelEducation, handleSaveEducation, handleChange, handleDeleteEducation}) {
    const edit = educations.find(education => education.edit === true);
    return(
        <div>
            <button className={!isExpand ? 'educationSection' : 'educationSection open' } id="education" onClick={handleExpand}>Education 
            <i id="education" className={!isExpand ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-down open' }></i></button>
            {isExpand && 
            <div className="sectionOpen">                
                {edit ? 
                    <div data-id={edit.id} key={edit.id}>
                        <Input type='text' name='university' placeholder='Insert School / University' onChange={handleChange} id='university' value={edit.university} label='School' dataset='education'/>

                        <Input type='text' name='degree' placeholder='Insert Degree' onChange={handleChange} id='degree' value={edit.degree} label='Degree' dataset='education'/>

                        <div data-id={edit.id}>
                            <Input type='text' name='from' placeholder='Insert Start Date' onChange={handleChange} id='from' value={edit.from} label='Start Date' dataset='education'/>

                            <Input type='text' name='to' placeholder='Insert End Date' onChange={handleChange} id='to' value={edit.to} label='End Date' dataset='education'/>
                        </div>

                        <Input type='text' name='city' placeholder='Insert Location' onChange={handleChange} id='city' value={edit.city} label='Location' span='optional' dataset='education'/>
                        <div>
                            <button data-id={edit.id} onClick={handleDeleteEducation}>Delete</button>
                            <button onClick={handleCancelEducation}>Cancel</button>
                            <button onClick={handleSaveEducation}>Save</button>
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