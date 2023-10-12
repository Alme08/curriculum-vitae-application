import AccentColorEdit from "./Customize/AccentColorEdit";
import FontEdit from "./Customize/FontEdit";
import ResumeColsEdit from "./Customize/ResumeColsEdit";
import '../styles/layout.css'

function Layout({onColChange}){
    return(
        <div
      className="customize"
    >
      <div>
        <ResumeColsEdit onColChange={onColChange} />
      </div>
      <div>
        <AccentColorEdit />
      </div>
      <div>
        <FontEdit />
      </div>
    </div>
    )
}

export default Layout;