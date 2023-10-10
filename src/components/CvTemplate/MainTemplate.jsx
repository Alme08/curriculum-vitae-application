function MainTemplate({educations}) {
    return(
        educations.map((education) => {
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
        })
    )
}

export default MainTemplate