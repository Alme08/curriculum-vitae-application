import PersonalInfo from "./CvForm/PersonalInfo";

function Content(props){
    const {personalInfo, handleChange} = props;
    return(
        <PersonalInfo personalInfo={personalInfo} handleChange={handleChange}/>
    )
}

export default Content;