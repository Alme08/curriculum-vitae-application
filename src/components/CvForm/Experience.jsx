import Input from "../tools/Input";

function Experience(
    {experiences, 
    handleExpand, 
    isExpand, 
    handleAdd, 
    handleChange,
    handleDelete,
    handleCancel,
    handleSave,
    handleEdit,
    handleHidden}) {
    const edit = experiences.find(experience => experience.edit === true);
    return(
        <div id="experience">
            <button className={!isExpand ? 'experienceSection' : 'experienceSection open' } id="experience" onClick={handleExpand}>Experience
            <i id="experience" className={!isExpand ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-down open' }></i></button>
            {isExpand &&
            <div className="sectionOpen">
                {edit ? 
                    <div className="form" data-id={edit.id} key={edit.id}>
                        <Input type='text' name='company' placeholder='Insert company name' onChange={handleChange} id='company' value={edit.company} label='Company Name' dataset='experience'/>

                        <Input type='text' name='position' placeholder='Insert position title' onChange={handleChange} id='position' value={edit.position} label='Position Title' dataset='experience'/>

                        <div data-id={edit.id} className="flex">
                            <Input type='text' name='from' placeholder='Insert start date' onChange={handleChange} id='from' value={edit.from} label='Start Date' dataset='experience'/>

                            <Input type='text' name='to' placeholder='Insert end date' onChange={handleChange} id='to' value={edit.to} label='End Date' dataset='experience'/>
                        </div>

                        <Input type='text' name='city' placeholder='Insert  Location' onChange={handleChange} id='city' value={edit.city} label='Location' span='optional' dataset='experience'/>

                        <Input type='text' name='description' placeholder='Insert description' onChange={handleChange} id='description' value={edit.description} label='Description' span='optional' dataset='experience'/>
                        <div className="buttons">
                            <button data-id={edit.id} data-set='experience' onClick={handleDelete}>Delete</button>
                            <div>
                                <button data-set='experience' onClick={handleCancel}>Cancel</button>
                                <button data-set='experience' className="save" onClick={handleSave}>Save</button>
                            </div>
                        </div>
                    </div> :
                    <>
                        {experiences.map((experience) => {
                            return <button  data-set='experience' onClick={handleEdit} data-id={experience.id} key={experience.id}>
                                {experience.company}
                                {!experience.hidden ? <i onClick={handleHidden} className="fa-regular fa-eye"></i> : 
                                <i onClick={handleHidden} className="fa-regular fa-eye-slash"></i>}
                                </button>
                        })}
                        <button className="addExperience" data-set='experience' onClick={handleAdd}>+ Experience</button>
                    </>
                }
            </div>}
        </div>
    )
}

export default Experience;