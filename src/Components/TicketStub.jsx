import React from 'react'
import '../css/TicketStub.css'
import img1 from '../assets/code.png'
import img2 from '../assets/demon.jpeg'
function TicketStub() {
  return (
    <div className='main-content'>
        <div className='container'>
            <div className='image'>
                <img src={img2}/>
            </div>

            <div className='middle'>
                <div className='title'>
                    <div  className='heading'>DEMON SLAYER</div>
                    <div className='subheading'>Ticket</div>
                </div>
                <div className='info-date'>
                    <div>20.11.2023</div>
                    <div>Saturday 7pm-10pm</div>
                </div>
                <div className='info-loct'>
                    <div>Tate Britain</div>
                    <div>Milbank Str. 13B</div>
                    <div>London, UK</div>
                </div>
            </div>

            <div className='side-details'>
                <div className='side-info'>
                    <div>1 Day Pass</div>
                    <div>20.11.2023</div>
                    <div>K3-8693-111</div>
                </div>
                <div className='bar'>
                    <div className='barcode'>
                        <img src={img1}/>
                    </div>
                    <div className='bar-number'>03 765 960 001 763</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TicketStub


