function Sidebar({handleSidebar}) {
    return(
        <>
            <button id="content" onClick={handleSidebar}>Content</button>
            <button id="layout" onClick={handleSidebar}>Layout</button>
        </>
    )
}

export default Sidebar