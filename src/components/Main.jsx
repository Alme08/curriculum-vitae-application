import { useState } from "react";
import uniqid from 'uniqid';
import Sidebar from "./Sidebar";
import Content from "./Content";
import Layout from "./Layout";
import CvTemplate from "./Template";

function Main() {
    const [customize, setCustomize] = useState(false)
    const [expand, setExpand] = useState(null)
    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        title: '',
        email: '',
        address: '',
        phone: '',
      });
    const [educations, setEducations] = useState([]);

    const handleSidebar = (e) =>{
        e.target.id === 'content' ? setCustomize(false) : setCustomize(true) 
    }
    const handleExpand = (e) =>{
        e.target.id === expand ? setExpand(null) :
        e.target.id === 'education' ? setExpand('education') : setExpand('experience')
    }

    const handleChange = (e) =>{
        e.target.dataset.field === 'personalInfo' ? setPersonalInfo({...personalInfo, [e.target.name]: e.target.value}) :
        e.target.dataset.field === 'education' ? setEducations(educations.map((education) => {
            if (education.id === e.target.parentNode.parentNode.dataset.id) {
              return {
                ...education,
                [e.target.name]: e.target.value,
              };
            }
            return education;
          })) : 
        console.log('hey')

    }

    const handleAddEducation = () =>{
        setEducations([
            ...educations,
            {
              university: '',
              city: '',
              degree: '',
              from: '',
              to: '',
              hidden: false,
              edit: true,
              id: uniqid(),
            },
        ]);
    };
    return(
        <main className="container">
            <section className="edit">
                <Sidebar handleSidebar={handleSidebar} customize={customize}/>
                <div className="cv-form">
                    {customize !== true ?
                    <Content personalInfo={personalInfo} educations={educations} handleChange={handleChange} handleAddEducation={handleAddEducation} handleExpand={handleExpand} expand={expand}/> : 
                    <Layout/>}
                </div>
            </section>
            <section className="CvTemplate">
                <CvTemplate personalInfo={personalInfo}/>
            </section>
        </main>
    )
}

export default Main;