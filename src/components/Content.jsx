// import { useState } from "react";
import PersonalInfo from "./CvForm/PersonalInfo";
import Education from "./CvForm/Education";
import Experience from "./CvForm/Experience";

function Content(props){
    
    const {personalInfo, educations, handleChange, handleAddEducation, handleDeleteEducation, handleCancelEducation, handleSaveEducation, handleExpand, expand} = props;

    
    return(
        <>
            <PersonalInfo personalInfo={personalInfo} handleChange={handleChange}/>
            <Education educations={educations} handleExpand={handleExpand} isExpand={expand === 'education'} handleAddEducation={handleAddEducation} handleCancelEducation={handleCancelEducation} handleChange={handleChange} handleDeleteEducation={handleDeleteEducation} handleSaveEducation={handleSaveEducation}/>
            <Experience handleExpand={handleExpand} isExpand={expand === 'experience'}/>
        </>
    )
}

export default Content;