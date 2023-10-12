function MainTemplate({educations, experiences}) {
    return(
        <div>
            <div className="education-info-section resume-section">
                <h3 className="header-text">Education</h3>
                              
                    {educations.map((education) => {
                        if (education.hidden === false) {
                            return(
                                <div className="education-info"  key={education.id}>  
                                    <div className="education-info-group">
                                        <p className="dates">{education.from}<span> - </span>{education.to}</p>
                                        <p>{education.city}</p>
                                    </div>
                                    <div className="education-info-group">
                                        <p className="education-info-schoolName">{education.university}</p>
                                        <p className="education-info-degree">{education.degree}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            

            <div className="experience-info-section resume-section">
                <h3 className="header-text">Professional Experience</h3>
                {experiences.map((experience) => {
                    if (experience.hidden === false) {
                        return(
                            <div className="experience-info" key={experience.id}>
                                <div className="experience-info-group">
                                    <p className="dates">{experience.from}<span> - </span>{experience.to}</p>
                                    <p>{experience.city}</p>
                                </div>
                                <div className="experience-info-group">
                                    <p className="experience-info-companyName">{experience.company}</p>
                                    <p className="experience-info-positionTitle">{experience.position}</p>
                                    <p className="experience-info-description">{experience.description}</p>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default MainTemplate