import { useState } from "react";
import PersonalInfo from "./CvForm/PersonalInfo";
import Education from "./CvForm/Education";
import Experience from "./CvForm/Experience";

function Content(props){
    const [expand, setExpand] = useState(null)
    const {personalInfo, educations, handleChange, handleAddEducation} = props;

    const handleExpand = (e) =>{
        e.target.id === expand ? setExpand(null) :
        e.target.id === 'education' ? setExpand('education') : setExpand('experience')
    }
    return(
        <>
            <PersonalInfo personalInfo={personalInfo} handleChange={handleChange}/>
            <Education educations={educations} handleExpand={handleExpand} isExpand={expand === 'education'} handleAddEducation={handleAddEducation}/>
            <Experience handleExpand={handleExpand} isExpand={expand === 'experience'}/>
        </>
    )
}

export default Content;