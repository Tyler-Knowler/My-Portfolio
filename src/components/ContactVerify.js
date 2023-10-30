const ContactVerify = () => {

return (
    <div>
        <div className='Contact-Verify' id='Success-Message'>
            <p className="Message-Content">
            Message sent successfully. <br></br>
            Thank you for reaching out!
            </p>
            <div className="Time-Bar" id="Success-Bar"></div>
        </div>
        <div className='Contact-Verify' id='Failed-Message'>
            <p className="Message-Content">
            Message failed to send. <br></br>
            Please try again later.
            </p>
            <div className="Time-Bar" id="Failed-Bar"></div>
        </div>
    </div>
)} 
    
export default ContactVerify;