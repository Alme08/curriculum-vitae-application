import { useState } from "react";
import PersonalInfo from "./CvForm/PersonalInfo";
import Education from "./CvForm/Education";
import Experience from "./CvForm/Experience";

function Content(props){
    const [expand, setExpand] = useState('education')
    const {personalInfo, handleChange} = props;

    const handleExpand = (e) =>{
        e.target.id === expand ? setExpand(null) :
        e.target.id === 'education' ? setExpand('education') : setExpand('experience')
    }
    return(
        <>
            <PersonalInfo personalInfo={personalInfo} handleChange={handleChange}/>
            <Education handleExpand={handleExpand} isExpand={expand === 'education'}/>
            <Experience handleExpand={handleExpand} isExpand={expand === 'experience'}/>
        </>
    )
}

export default Content;