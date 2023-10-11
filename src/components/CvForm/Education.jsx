import Input from "../tools/Input";

function Education({educations, 
                    handleExpand, 
                    isExpand, 
                    handleAdd, 
                    handleCancel, 
                    handleSave,
                    handleEdit,
                    handleChange, 
                    handleDelete,
                    handleHidden}) {

    const edit = educations.find(education => education.edit === true);
    return(
        <div id="education">
            <button className={!isExpand ? 'educationSection' : 'educationSection open' } id="education" onClick={handleExpand}>Education 
            <i id="education" className={!isExpand ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-down open' }></i></button>
            {isExpand && 
            <div className="sectionOpen">                
                {edit ? 
                    <div className="form" data-id={edit.id} key={edit.id}>
                        <Input type='text' name='university' placeholder='Insert School / University' onChange={handleChange} id='university' value={edit.university} label='School' dataset='education'/>

                        <Input type='text' name='degree' placeholder='Insert Degree' onChange={handleChange} id='degree' value={edit.degree} label='Degree' dataset='education'/>

                        <div data-id={edit.id} className="flex">
                            <Input type='text' name='from' placeholder='Insert Start Date' onChange={handleChange} id='from' value={edit.from} label='Start Date' dataset='education'/>

                            <Input type='text' name='to' placeholder='Insert End Date' onChange={handleChange} id='to' value={edit.to} label='End Date' dataset='education'/>
                        </div>

                        <Input type='text' name='city' placeholder='Insert Location' onChange={handleChange} id='city' value={edit.city} label='Location' span='optional' dataset='education'/>
                        <div className="buttons">
                            <button data-id={edit.id} data-set='education' onClick={handleDelete}>Delete</button>
                            <div>
                                <button data-set='education' onClick={handleCancel}>Cancel</button>
                                <button data-set='education' className="save" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div> : 
                    <>
                        {educations.map((education) => {
                            return <button data-set='education' onClick={handleEdit} data-id={education.id} key={education.id}>
                                {education.university}
                                {!education.hidden ? <i onClick={handleHidden} className="fa-regular fa-eye"></i> : 
                                <i onClick={handleHidden} className="fa-regular fa-eye-slash"></i>}
                                </button>
                        })}
                        <button className="addEducation" data-set='education' onClick={handleAdd}>+ Education</button>
                    </>
                }
            </div>}
        </div>
    )
}

export default Education;