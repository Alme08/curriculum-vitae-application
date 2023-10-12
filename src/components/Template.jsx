import HeaderTemplate from "./CvTemplate/HeaderTemplate"
import MainTemplate from "./CvTemplate/MainTemplate"
import '../styles/template.css'

function CvTemplate({personalInfo, educations, experiences}) {
    return(
        <>
            <HeaderTemplate personalInfo={personalInfo}/>
            <MainTemplate educations={educations} experiences={experiences}/>
        </>
    )
}

export default CvTemplate