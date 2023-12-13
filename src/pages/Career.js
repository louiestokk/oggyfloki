import React,{useState} from 'react'
import banner from '../utils/jobimg.webp'
import twitter from '../utils/twitter.png'
import telegram from '../utils/telegram.png'
const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    banner: {
      width: '100%',
      height: 'auto',
      marginBottom: '40px',
    },
    header: {
      fontSize: '2rem',
      color: '#2a2a72',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1rem',
      marginBottom: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    stepBox: {
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
      padding: '20px',
      margin: '10px 0',
      transition: 'box-shadow 0.3s ease',
    },
    stepBoxHover: {
      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '20px 0',
    },
    footer: {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333',
      color: 'white',
      padding: '20px 0',
    },
    socialIcon: {
      width: '100px',
      height: '100px',
      margin: '0 15px',
      objectFit:'cover'
    },
    footerText: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    }
  };
  
  
const Career = () => {
    const [first, setfirst] = useState('')
    const [hover, setHover] = React.useState(false);
    const toggleHover = () => setHover(!hover);
  return (
    <div  style={styles.container}>
    
    <img src={banner} alt='career oggyfloki'style={styles.banner}/>
      <h1 style={styles.header}>Join Our Team at OGGY FLOKI</h1>
      <p style={{textAlign:'center',maxWidth:'600px',margin:'0.5rem auto'}}>At OGGY FLOKI, we're always on the lookout for exceptional talents to join our diverse and innovative team</p>
      <h2 style={{marginTop:'1rem'}}>How to Apply:</h2>
      <div style={{ ...styles.stepBox}} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <p style={styles.paragraph}>1. <strong>Online Application:</strong> Start your journey with us by applying through our career portal on our website. This is the only channel through which we accept applications, ensuring a streamlined and fair process for all candidates.</p>

      </div>
      <div style={{ ...styles.stepBox }} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <p style={styles.paragraph}>2.<strong>Application Review:</strong> If your application aligns with our needs, you'll move forward in our hiring process. This involves a comprehensive review of your skills, experience, and potential fit with our team.</p>

      </div>
      <div style={{ ...styles.stepBox }} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <p style={styles.paragraph}>3. <strong>Verification Process:</strong> To maintain the highest standards of security and integrity, selected candidates will undergo a verification process. This step is crucial to ensure the safety and confidentiality of our work and community.</p>

      </div>
      <div style={{ ...styles.stepBox }} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <p style={styles.paragraph}>4. <strong>Video Interview:</strong> Successful candidates will be invited for a video interview via Google Meets. This is your opportunity to showcase your skills, discuss your experiences, and learn more about our culture and the role you're applying for.</p>

      </div>

      <a href='https://form.jotform.com/233456512659361' style={styles.button}>APPLY</a>
      <div style={styles.footer}>
      <div>
      <img src={twitter} alt='Twitter' style={styles.socialIcon} />
        <img src={telegram} alt='Telegram' style={styles.socialIcon} />
      </div>
        <span style={styles.footerText}>OGGY FLOKI</span>
      </div>
    </div>
  )
}

export default Career