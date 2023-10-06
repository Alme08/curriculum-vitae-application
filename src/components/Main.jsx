import { useState } from "react";
import uniqid from 'uniqid';
import Sidebar from "./Sidebar";
import Content from "./Content";
import Layout from "./Layout";
import CvTemplate from "./Template";

function Main() {
    const [customize, setCustomize] = useState(false)
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

    const handleChange = (e) =>{
        e.target.dataset.field === 'personalInfo' ? setPersonalInfo({...personalInfo, [e.target.name]: e.target.value}) :
        console.log('hola') 
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
                    <Content personalInfo={personalInfo} educations={educations} handleChange={handleChange} handleAddEducation={handleAddEducation}/> : 
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