import { useState } from "react";
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

    const handleSidebar = (e) =>{
        e.target.id === 'content' ? setCustomize(false) : setCustomize(true) 
    }

    const handleChange = (e) =>{
        e.target.parentNode.className === 'personalInfo' ? setPersonalInfo({...personalInfo, [e.target.name]: e.target.value}) :
        console.log('hola') 
    }
    return(
        <>
            <Sidebar handleSidebar={handleSidebar}/>
            {customize !== true ?
             <Content personalInfo={personalInfo} handleChange={handleChange}/> : 
             <Layout/>}
            <CvTemplate personalInfo={personalInfo}/>

        </>
    )
}

export default Main;