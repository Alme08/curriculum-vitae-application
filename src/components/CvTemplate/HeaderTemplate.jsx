function HeaderTemplate({personalInfo}){
    return(
        <>
            <h2>{personalInfo.fullName}</h2>
            <p>{personalInfo.title}</p>
            <div>
                {personalInfo.email && <p>. {personalInfo.email}</p>}
                {personalInfo.phone && <p>+ {personalInfo.phone}</p>}
                {personalInfo.address && <p>* {personalInfo.address}</p>}
            </div>
        </>
    )
}

export default HeaderTemplate