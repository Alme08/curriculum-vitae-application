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
    // const [experiences, setExperiences] = useState([]);
    const [prevState, setPrevState] = useState(null);
    

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
        setPrevState(educations)
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

    const handleDeleteEducation = (e) => {
        const newEducations = educations.filter(education => education.id !== e.target.dataset.id)
        setEducations(newEducations)
        setPrevState(null)
    }
    const handleCancelEducation = () => {
        setEducations(prevState.map((education) =>{
            if (education.edit === true) {
                education.edit = false
            }
            return education
        }))
        setPrevState(null)
    }
    const handleSaveEducation = () => {
        setEducations(educations.map((education) =>{
            if (education.edit === true) {
                education.edit = false
            }
            return education
        }))
        setPrevState(null)
    }
    const handleEditEducation = (e) => {
        setPrevState(educations)
        setEducations(educations.map((education) =>{
            if (education.id === e.target.dataset.id) {
                education.edit = true
            }
            return education
        }))
    }
    const handleHiddenEducation = (e) => {
        setEducations(educations.map((education) =>{
            if (education.id === e.target.parentNode.dataset.id) {
                education.hidden === true ? education.hidden = false : education.hidden = true
            }
            return education
        }))
    }
    return(
        <main className="container">
            <section className="edit">
                <Sidebar handleSidebar={handleSidebar} customize={customize}/>
                <div className="cv-form">
                    {customize !== true ?
                    <Content 
                        personalInfo={personalInfo} 
                        educations={educations} 
                        handleChange={handleChange} 
                        handleAddEducation={handleAddEducation} 
                        handleDeleteEducation={handleDeleteEducation} 
                        handleCancelEducation={handleCancelEducation}
                        handleSaveEducation={handleSaveEducation}
                        handleEditEducation={handleEditEducation}
                        handleExpand={handleExpand}
                        handleHiddenEducation={handleHiddenEducation} 
                        expand={expand}/> : 
                    <Layout/>}
                </div>
            </section>
            <section className="CvTemplate">
                <CvTemplate personalInfo={personalInfo} educations={educations}/>
            </section>
        </main>
    )
}

export default Main;