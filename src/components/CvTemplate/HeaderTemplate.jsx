function HeaderTemplate({personalInfo}){
    return(
        <header className="headerTemplate">
            <div className="name">
                <h2>{personalInfo.fullName}</h2>
                <p>{personalInfo.title}</p>
            </div>
            <div className="contact">
                {personalInfo.email && <div><i className="fa-solid fa-envelope"></i> {personalInfo.email}</div>}
                {personalInfo.phone && <div><i className="fa-solid fa-phone"></i> {personalInfo.phone}</div>}
                {personalInfo.address && <div><i className="fa-solid fa-location-dot"></i> {personalInfo.address}</div>}
            </div>
        </header>
    )
}

export default HeaderTemplate