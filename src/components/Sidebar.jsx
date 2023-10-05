function Sidebar({handleSidebar}) {
    return(
        <div className="sidebar">
            <button id="content" onClick={handleSidebar}><span>A</span>Content</button>
            <button id="layout" onClick={handleSidebar}><span>A</span>Layout</button>
        </div>
    )
}

export default Sidebar