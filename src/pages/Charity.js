import React from 'react'

const Charity = () => {
  return (
    <div className='charity-container'>
    
        <div className='charity-hero'>
        <h1>We Can All Live In Love ❤️ And Peace 🙏/ OggyFloki</h1>
        <h2 style={{color:'white'}}>Supporting Gaza & Jerusalem: Our Charity Initiative</h2>
        </div>
     
        <div className='charity-partners'>
            <h2>Our Partner Organizations</h2>
            <ol>
                <li>
                    <h3>Doctors Without Borders (MSF)</h3>
                    <p>They have been providing medical supplies to hospitals and health facilities in Gaza for over 20 years. Their teams work in hospitals and outpatient clinics, offering comprehensive care for people suffering from burns and trauma, as well as running a reconstructive surgery program in northern Gaza.</p>
                    <a href='https://www.msf.org/' target='_blank'>www.msf.org</a>
                </li>
                <li>
                    <h3>Anera</h3>
                    <p>This organization has no political or religious affiliation and has been mobilizing immediate emergency relief in Palestine. They have delivered essential supplies to Gaza’s largest hospital and are distributing food parcels, water, and hygiene kits to displaced families.</p>
                    <a href='https://www.anera.org'>www.anera.org</a>
                </li>
                <li>
                    <h3>Muslim Aid USA</h3>
                    <p>They are actively responding to the humanitarian crisis, delivering essential medical aid and equipment to main hospitals in Gaza, as well as providing food packages and vital non-food items like hygiene kits.</p>
                    <a href='https://www.mausa.org'>www.mausa.org</a>
                </li>
                <li>
                    <h3>American Jewish Joint Distribution Committee</h3>
                    <p>They have activated their emergency response across Israel, supporting those directly impacted by the conflict, including the elderly, people with disabilities, children, and families at risk.</p>
                    <a href='https://www.jdc.org'>www.jdc.org</a>
                </li>
                <li>
                    <h3>Zakat Foundation of America</h3>
                    <p>With over 20 years of experience in the region, they provide both long-term (education, health, food sustainability) and short-term aid. They have been supplying emergency relief, including medical supplies, hygiene kits, food, warm blankets, and clothing.</p>
                    <a href='https://www.zakat.org'>www.zakat.org</a>
                </li>
                <li>
                    <h3>
                    Episcopal Relief & Development
                    </h3>
                    <p>Working with Al Ahli Hospital in Gaza, they are recruiting emergency staff and gathering essential supplies including medicines, ICU equipment, fuel, and food.</p>
                    <a href='https://www.episcopalrelief.org'>www.episcopalrelief.org</a>
                </li>
            </ol>
        </div>
 <div className='charity-support'>
    <h2>Make a Difference with Your Donation</h2>
    <p>Every contribution counts. Donate easily through our secure platform, and we will ensure that your generosity reaches these organizations effectively and transparently.</p>
  
    <br></br>
    <h3>Our Commitment</h3>
    <p>We pledge to maintain complete transparency about the funds raised and how they are allocated among our partner organizations.</p>
    <h3>Progress Report</h3>
    <p>Regular updates will be provided to keep our community informed about the impact of their donations.</p>
    <div className='charity-join'>
        <h2>Join Us in This Cause</h2>
        <p>Together, we can bring hope and change to the lives of those caught in the midst of conflict. Your support can make a real difference in Gaza and Jerusalem.</p>
        <button className='donate-button'>DONATE 🙏</button>
    </div>
 </div>
    </div>
  )
}

export default Charity