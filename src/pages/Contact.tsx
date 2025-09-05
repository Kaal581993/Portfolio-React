
const Contact = () => {
  return (
    <div className='contact-container'><h1>Contact Me</h1>
    <h3>Need Enquiry or get in touch with Me</h3>
    <div className='contact-form-container'>
        <form className='contact-form' action="">
            <input type="text" className='form-text' placeholder='First Name'/>
            <input type="text" className='form-text' placeholder='Last Name'/>
            <input type='text' className='form-text' placeholder='Email'/>
                <select name="Gender" className="select" id="gender">
                <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-Binary</option>
                        <option value="trans-male">Transmale</option>
                        <option value="trans-female">Transfemale</option>
                </select>
            <textarea name="message" className='form-text-box' id="" placeholder='Your Message'></textarea>
            <button className='form-button'> Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Contact