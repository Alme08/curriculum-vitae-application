import Input from "../tools/Input";
import '../../styles/personalInfoForm.css'

function PersonalInfo({personalInfo, handleChange}) {
    
    return(
        <div className="personal-info">
            <h2>Personal Details</h2>
            <form action="">
                <Input type='text' name='fullName' placeholder='Insert full name' onChange={handleChange} id='fullName' value={personalInfo.fullName} label='Full name' dataset='personalInfo'/>

                <Input type='text' name='title' placeholder='Insert title' onChange={handleChange} id='title' value={personalInfo.title} label='Title' span='recommended' dataset='personalInfo'/>

                <Input type='email' name='email' placeholder='Insert email' onChange={handleChange} id='email' value={personalInfo.email} label='Email' span='recommended' dataset='personalInfo'/>

                <Input type='text' name='address' placeholder='City, Country' onChange={handleChange} id='address' value={personalInfo.address} label='Address' span='recommended' dataset='personalInfo'/>
                
                <Input tpye='tel' name='phone' placeholder='Insert phone number' onChange={handleChange} id='phone' value={personalInfo.phone} label='phoneNumber' span='recommended' dataset='personalInfo'/>
            </form>
        </div>
    )
}

export default PersonalInfo;