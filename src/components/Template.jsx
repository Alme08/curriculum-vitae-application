import HeaderTemplate from "./CvTemplate/HeaderTemplate"
import MainTemplate from "./CvTemplate/MainTemplate"

function CvTemplate({personalInfo, educations, experiences}) {
    return(
        <>
            <HeaderTemplate personalInfo={personalInfo}/>
            <MainTemplate educations={educations} experiences={experiences}/>
        </>
    )
}

export default CvTemplate