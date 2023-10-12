import '../styles/sidebar.css'

function Sidebar({handleSidebar, customize}) {
    return(
        <div className="sidebar">
            <button className={!customize ? "selected" : ''} id="content" onClick={handleSidebar}><i id="content" className="fa-solid fa-pen"></i>Content</button>
            <button className={customize ? "selected" : ''} id="layout" onClick={handleSidebar}><i className="fa-regular fa-file"></i>Layout</button>
        </div>
    )
}

export default Sidebar