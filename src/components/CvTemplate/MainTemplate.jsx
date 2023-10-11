function MainTemplate({educations, experiences}) {
    return(
        <div>
            {educations.map((education) => {
                if (education.hidden === false) {
                    return(
                        <div key={education.id}>
                            <p>{education.university}</p>
                            <p>{education.degree}</p>
                            <p>{education.from}</p>
                            <p>{education.to}</p>
                            <p>{education.city}</p>
                        </div>
                    )
                }
            })}
            {experiences.map((experience) => {
                if (experience.hidden === false) {
                    return(
                        <div key={experience.id}>
                            <p>{experience.company}</p>
                            <p>{experience.position}</p>
                            <p>{experience.from}</p>
                            <p>{experience.to}</p>
                            <p>{experience.city}</p>
                            <p>{experience.description}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default MainTemplate