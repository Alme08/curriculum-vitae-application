import { useState } from "react";
import uniqid from 'uniqid';
import Sidebar from "./Sidebar";
import Content from "./Content";
import Layout from "./Layout";
import CvTemplate from "./Template";
import exampleData from "./tools/exampleData";
import TemplateLoader from "./TemplateLoader";

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
    const [experiences, setExperiences] = useState([]);
    const [prevState, setPrevState] = useState(null);
    const [resumeLayout, setResumeLayout] = useState("top");
    

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
          e.target.dataset.field === 'experience' ? setExperiences(experiences.map((experience) => {
            if (experience.id === e.target.parentNode.parentNode.dataset.id) {
              return {
                ...experience,
                [e.target.name]: e.target.value,
              };
            }
            return experience;
          })) : console.log('Error')

    }
    const handleAdd = (e) =>{
        if (e.target.dataset.set === 'education') {
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
        } else if(e.target.dataset.set === 'experience') {
            setPrevState(experiences)
            setExperiences([
                ...experiences,
                {
                  company: '',
                  position: '',
                  from: '',
                  to: '',
                  city: '',
                  description: '',
                  hidden: false,
                  edit: true,
                  id: uniqid(),
                },
            ]);
        }
    };

    const handleDelete = (e) => {
        if (e.target.dataset.set === 'education') {
            const newEducations = educations.filter(education => education.id !== e.target.dataset.id)
            setEducations(newEducations)
            setPrevState(null)
        } else if(e.target.dataset.set === 'experience') {
            const newExperiences = experiences.filter(experience => experience.id !== e.target.dataset.id)
            setExperiences(newExperiences)
            setPrevState(null)
        }
    }
    const handleCancel = (e) => {
        if (e.target.dataset.set === 'education') {
            setEducations(prevState.map((education) =>{
                if (education.edit === true) {
                    education.edit = false
                }
                return education
            }))
            setPrevState(null)
        } else if(e.target.dataset.set === 'experience') {
            setExperiences(prevState.map((experience) =>{
                if (experience.edit === true) {
                    experience.edit = false
                }
                return experience
            }))
            setPrevState(null)
        }
    }
    const handleSave = (e) => {
        if (e.target.dataset.set === 'education') {
            setEducations(educations.map((education) =>{
                if (education.edit === true) {
                    education.edit = false
                }
                return education
            }))
            setPrevState(null)
        } else if(e.target.dataset.set === 'experience') {
            setExperiences(experiences.map((experience) =>{
                if (experience.edit === true) {
                    experience.edit = false
                }
                return experience
            }))
            setPrevState(null)
        }
    }
    const handleEdit = (e) => {
        if (e.target.dataset.set === 'education') {
            setPrevState(educations)
            setEducations(educations.map((education) =>{
                if (education.id === e.target.dataset.id) {
                    education.edit = true
                }
                return education
            }))
        } else if(e.target.dataset.set === 'experience') {
            setPrevState(experiences)
            setExperiences(experiences.map((experience) =>{
                if (experience.id === e.target.dataset.id) {
                    experience.edit = true
                }
                return experience
            }))
        }
    }
    const handleHidden = (e) => {
        if (e.target.parentNode.dataset.set === 'education') {
            setEducations(educations.map((education) =>{
                if (education.id === e.target.parentNode.dataset.id) {
                    education.hidden === true ? education.hidden = false : education.hidden = true
                }
                return education
            }))
        } else if(e.target.parentNode.dataset.set === 'experience') {
            setExperiences(experiences.map((experience) =>{
                if (experience.id === e.target.parentNode.dataset.id) {
                    experience.hidden === true ? experience.hidden = false : experience.hidden = true
                }
                return experience
            }))
        }
    }
    return(
        <main className="">
            <section className="edit">
                <Sidebar handleSidebar={handleSidebar} customize={customize}/>
                <div className="cv-form">
                    {customize !== true ?
                    <>
                        <TemplateLoader
                            onTemplateLoad={() => {
                                setPersonalInfo(exampleData.personalInfo);
                                setEducations(exampleData.educations)
                                setExperiences(exampleData.experiences);
                            }}
                            onClear={() => {
                                setPersonalInfo({
                                    fullName: '',
                                    title: '',
                                    email: '',
                                    address: '',
                                    phone:'',
                                });
                                setEducations([]);
                                setExperiences([]);
                                setPrevState(null);
                            }}
                        />
                        <Content 
                            personalInfo={personalInfo} 
                            educations={educations} 
                            experiences={experiences}
                            handleChange={handleChange} 
                            handleAdd={handleAdd} 
                            handleDelete={handleDelete} 
                            handleCancel={handleCancel}
                            handleSave={handleSave}
                            handleEdit={handleEdit}
                            handleExpand={handleExpand}
                            handleHidden={handleHidden} 
                            expand={expand}/> 
                    </>: 
                    <Layout onColChange={setResumeLayout}/>}
                </div>
            </section>
            <section className="CvTemplate-container">
                <div className={`CvTemplate ${resumeLayout}`}>
                    <CvTemplate personalInfo={personalInfo} educations={educations} experiences={experiences}/>
                </div>
            </section>
        </main>
    )
}

export default Main;