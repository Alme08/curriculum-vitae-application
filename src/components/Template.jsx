import HeaderTemplate from "./CvTemplate/HeaderTemplate"
import MainTemplate from "./CvTemplate/MainTemplate"

function CvTemplate({personalInfo, educations}) {
    return(
        <>
            <HeaderTemplate personalInfo={personalInfo}/>
            <MainTemplate educations={educations}/>
        </>
    )
}

export default CvTemplate