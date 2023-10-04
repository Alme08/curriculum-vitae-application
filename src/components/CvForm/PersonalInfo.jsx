import Input from "../tools/Input";

function PersonalInfo({personalInfo, handleChange}) {
    
    return(
        <div className="personalInfo">
            <h2>Personal Details</h2>
            <Input name='fullName' placeholder='Insert full name' onChange={handleChange} id='fullName' value={personalInfo.fullName} 
            label='Full name'/>
            <Input name='title' placeholder='Insert title' onChange={handleChange} id='title' value={personalInfo.title} 
            label='Title' span='recommended'/>
            <Input name='email' placeholder='Insert email' onChange={handleChange} id='email' value={personalInfo.email} 
            label='Email' span='recommended'/>
            <Input name='address' placeholder='City, Country' onChange={handleChange} id='address' value={personalInfo.address} 
            label='Address' span='recommended'/>
            <Input name='phone' placeholder='Insert phone number' onChange={handleChange} id='phone' value={personalInfo.phone} 
            label='phoneNumber' span='recommended'/>
        </div>
    )
}

export default PersonalInfo;