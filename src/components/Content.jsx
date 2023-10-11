// import { useState } from "react";
import PersonalInfo from "./CvForm/PersonalInfo";
import Education from "./CvForm/Education";
import Experience from "./CvForm/Experience";

function Content(props){
    
    const {personalInfo, 
        educations, 
        experiences,
        handleChange, 
        handleAdd, 
        handleDelete, 
        handleCancel, 
        handleSave, 
        handleExpand,
        handleEdit, 
        handleHidden,
        expand} = props;
    return(
        <>
            <PersonalInfo personalInfo={personalInfo} handleChange={handleChange}/>
            <Education 
                educations={educations} 
                handleExpand={handleExpand} 
                isExpand={expand === 'education'} 
                handleAdd={handleAdd} 
                handleCancel={handleCancel} 
                handleChange={handleChange} 
                handleDelete={handleDelete} 
                handleSave={handleSave}
                handleEdit={handleEdit}
                handleHidden={handleHidden}/>
                
            <Experience 
                experiences={experiences}
                handleExpand={handleExpand} 
                isExpand={expand === 'experience'}
                handleAdd={handleAdd}
                handleChange={handleChange}
                handleDelete={handleDelete}
                handleCancel={handleCancel}
                handleSave={handleSave}
                handleEdit={handleEdit}
                handleHidden={handleHidden}/>
        </>
    )
}

export default Content;