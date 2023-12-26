 
import Titles from '@/commonUl/Titles'
import ViewAll from '@/commonUl/ViewAll'
import Image from 'next/image';  
import { Button, Col, Row } from 'antd'
import React from 'react'
import ParaText from '@/commonUl/ParaText'; 
import { LuArrowRightCircle } from "react-icons/lu";
import { FaCalendarDay } from "react-icons/fa6";

export default function Home() {
  return (
    <> 
    <div className='exploreLocations mainGap'>
    <div className="mainContainer">      
     <Row align="middle" gutter={16}>
        <Col lg={18} md={18} sm={18} xs={18}>  
        <Titles level={2} color='neutralColor'> Explore Our Locations</Titles> 
        </Col>
        <Col lg={6} md={6} sm={6} xs={6} className='textEnd'>
          <ViewAll/>
        </Col> 
      </Row>
      <br/>
      <br/>
      <Row align="middle" gutter={16}>
        <Col lg={6} md={12} sm={6} xs={24}>
          <div className='locationsCard textCenter'> 
            <Image src="/images/card-img.png" alt="Your External Image" width={500} height={500}  />
            <br/>
            <ParaText size="medium" color='primaryColor'><b>Kissimmee East</b></ParaText>
            <Titles level={5} color='neutralColor'> Experience Kissimmee</Titles> 
            <a href="#"><ParaText size="medium" color='darkgray'>View Locations</ParaText></a> 
          </div>
        </Col>
        <Col lg={6} md={12} sm={6} xs={24}>
          <div className='locationsCard textCenter'> 
            <Image src="/images/card-img2.png" alt="Your External Image" width={500} height={500}  />
            <br/>
            <ParaText size="medium" color='primaryColor'><b>Kissimmee East</b></ParaText>
            <Titles level={5} color='neutralColor'> Experience Kissimmee</Titles> 
            <a href="#"><ParaText size="medium" color='darkgray'>View Locations</ParaText></a> 
          </div>
        </Col> 
        <Col lg={6} md={12} sm={6} xs={24}>
          <div className='locationsCard textCenter'> 
            <Image src="/images/card-img.png" alt="Your External Image" width={500} height={500}  />
            <br/>
            <ParaText size="medium" color='primaryColor'><b>Kissimmee East</b></ParaText>
            <Titles level={5} color='neutralColor'> Experience Kissimmee</Titles> 
            <a href="#"><ParaText size="medium" color='darkgray'>View Locations</ParaText></a> 
          </div>
        </Col>
        <Col lg={6} md={12} sm={6} xs={24}>
          <div className='locationsCard textCenter'> 
            <Image src="/images/card-img2.png" alt="Your External Image" width={500} height={500}  />
            <br/>
            <ParaText size="medium" color='primaryColor'><b>Kissimmee East</b></ParaText>
            <Titles level={5} color='neutralColor'> Experience Kissimmee</Titles> 
            <a href="#"><ParaText size="medium" color='darkgray'>View Locations</ParaText></a> 
          </div>
        </Col>
      </Row>
      </div>
    </div> 


    <div className='about mainGap'>
    <div className="mainContainer">      
     <Row  gutter={16}>
        <Col lg={12} md={12} sm={12} xs={24}> 
          <div className='textCenter'> 
           <Titles level={2} color='neutralColor'> About Us</Titles> 
           <br/>
           <ParaText size="medium" color='dark'> Clean, spacious suites. Affordable prices. Flexible options. The reasons to stay are endless. Whether re staying a week, a month or longer, our apartment suites are designed to provide all of the comforts of home. From full-sized refrigerators to free Wi-Fi, our convenient Florida locations provide all of the practical amenities you need, allowing you to not miss a beat.</ParaText>
           <br/>
           <br/>
           <br/>
           <br/>
           <Row className='mNone'>
              <Col lg={12} md={12} sm={12} xs={12} >
                <div className='numbersGap bottomBorder'>
                <Titles level={2} color='primaryColor'>  21M+</Titles>
                <ParaText size="medium" color='dark'><b>Visitors</b></ParaText>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} >
                <div className='numbersGap leftBorder bottomBorder'>
                <Titles level={2} color='primaryColor'>  244</Titles>
                <ParaText size="medium" color='dark'><b>Hotels</b></ParaText>
                </div>
              </Col> 
              <Col lg={12} md={12} sm={12} xs={12} >
                <div className='numbersGap  '>
                <Titles level={2} color='primaryColor'>  21M+</Titles>
                <ParaText size="medium" color='dark'><b>Visitors</b></ParaText>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} >
                <div className='numbersGap leftBorder '>
                <Titles level={2} color='primaryColor'>  244</Titles>
                <ParaText size="medium" color='dark'><b>Hotels</b></ParaText>
                </div>
              </Col>
            </Row>

          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={24 } className='textEnd'>
         <Image src="/images/about-us.png" alt="about-us" className='img100' width={500} height={500}  />
        </Col> 
      </Row> 
      </div>
    </div>

    <div className='stayConnect  '>
     <div className="mainContainer">
      <Row>
       <Col lg={12} md={12} sm={12} xs={24} >
         <div className='lineBox'></div>
          <Titles level={2} color='light'>Stay connected with us For new offers</Titles>
          <br/> 
          <ParaText size="large" color='light'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</ParaText> 
          <br/>
          <br/>
          <br/>
            <Row align="middle" gutter={16}>
              <Col lg={18} md={18} sm={18} xs={18}>
                <div className='emailFiled'>
                  <input type='text' placeholder='Email Address' />
                  <Button className='buttonSimple mediumButton'> Subscribe</Button>
                </div>  
              </Col> 
            </Row>
       </Col>
      </Row>
     </div>
    </div>

    <div className='stayRecommended mainGap'>
    <div className="mainContainer">      
     <Row align="middle" gutter={16}>
        <Col lg={18} md={18} sm={18} xs={18}>  
        <Titles level={2} color='neutralColor'> Stay We Recommended</Titles> 
        </Col>
        <Col lg={6} md={6} sm={6} xs={6} className='textEnd'>
          <ViewAll/>
        </Col> 
      </Row>
      <br/>
      <br/>

      <Row gutter={16}>
        <Col lg={13} md={13} sm={13} xs={24}> 
              <div className='locationsCard'> 
                <Image src="/images/Rectangle-5.png" alt="Your External Image" width={800} height={800}  />
                <br/>
                <div className='textBoxCard'>
                  <ParaText size="large" color='light'><b>Orlando</b></ParaText>
                  <br/>
                  <Titles level={4} color='light'> Orlando Awaits</Titles>
                  <br/>
                  <Button className='buttonSimple smallButton'> Book Now</Button> 
                </div> 
              </div>  
              <Row align="middle" gutter={16}>
                <Col lg={12} md={12} sm={12} xs={12}>
                   <div className='locationsCard'> 
                      <Image src="/images/Rectangle-8.png" alt="Your External Image" width={800} height={800}  />
                      <br/>
                      <div className='textBoxCard'>
                        <ParaText size="large" color='light'><b>Orlando</b></ParaText>
                        <br/>
                        <Titles level={4} color='light'> Orlando Awaits</Titles>
                        <br/>
                        <Button className='buttonSimple smallButton'> Book Now</Button> 
                      </div> 
                    </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                   <div className='locationsCard'> 
                      <Image src="/images/Rectangle-9.png" alt="Your External Image" width={800} height={800}  />
                      <br/>
                      <div className='textBoxCard'>
                        <ParaText size="large" color='light'><b>Orlando</b></ParaText>
                        <br/>
                        <Titles level={4} color='light'> Orlando Awaits</Titles>
                        <br/>
                        <Button className='buttonSimple smallButton'> Book Now</Button> 
                      </div> 
                    </div>
                </Col>
              </Row> 
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
            <div className='locationsCard'> 
              <Image src="/images/Rectangle-6.png" alt="Your External Image" width={800} height={800}  />
              <br/>
              <div className='textBoxCard'>
                <ParaText size="large" color='light'><b>Orlando</b></ParaText>
                <br/>
                <Titles level={4} color='light'> Orlando Awaits</Titles>
                <br/>
                <Button className='buttonSimple smallButton'> Book Now</Button> 
              </div> 
            </div>

            <div className='locationsCard'> 
              <Image src="/images/Rectangle-7.png" alt="Your External Image" width={800} height={800}  />
              <br/>
              <div className='textBoxCard'>
                <ParaText size="large" color='light'><b>Orlando</b></ParaText>
                <br/>
                <Titles level={4} color='light'> Orlando Awaits</Titles>
                <br/>
                <Button className='buttonSimple smallButton'> Book Now</Button> 
              </div> 
            </div>

        </Col>
      </Row>
 
      </div>
    </div> 

    <div className='freedom mainGap'> 
      <div className='mainContainer'>
       <Titles level={2} color='light'> You Have the Freedom to <br className='mNone'/> Stay awhile... </Titles>
       <br/>
       <br/>
       <Row align="middle" gutter={30}>
        <Col lg={8} md={8} sm={8} xs={24}>
            <div className='locationsCard'> 
              <Image src="/images/Rectangle-22.png" alt="Your External Image" width={800} height={800}  />
              <br/>  
              <Titles level={4} color='light'> Stay Flexible.</Titles> 
              <br/> 
              <ParaText size="large" color='light'>Easy booking, no long-term commitment, no credit check, and one bill for all the essentials lets you come and go on your time.</ParaText>
              
            </div>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
            <div className='locationsCard'> 
              <Image src="/images/Rectangle-22.png" alt="Your External Image" width={800} height={800}  />
              <br/>  
              <Titles level={4} color='light'> Stay Flexible.</Titles> 
              <br/> 
              <ParaText size="large" color='light'>Easy booking, no long-term commitment, no credit check, and one bill for all the essentials lets you come and go on your time.</ParaText>
              
            </div>
        </Col>
        <Col lg={8} md={8} sm={8} xs={24}>
            <div className='locationsCard'> 
              <Image src="/images/Rectangle-22.png" alt="Your External Image" width={800} height={800}  />
              <br/>  
              <Titles level={4} color='light'> Stay Flexible.</Titles> 
              <br/> 
              <ParaText size="large" color='light'>Easy booking, no long-term commitment, no credit check, and one bill for all the essentials lets you come and go on your time.</ParaText>
              
            </div>
        </Col>
      </Row>
      </div>
    </div>

   <div className='about mainGap'>
    <div className="mainContainer">
      <br/>      
     <Row  gutter={16}>
       <Col lg={3} md={3} sm={3} xs={24}> </Col> 
        <Col lg={18} md={18} sm={18} xs={24}> 
          <div className='textCenter'> 
           <Titles level={2} color='neutralColor'> What People Says About Us </Titles> 
           <br/>
           <ParaText size="medium" color='dark'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ParaText>
           <br/>  
          </div>
        </Col> 
      </Row> 
      <br/>
      </div>
    </div> 

    <div className='mainGap'>
    <div className="mainContainer">    
          <Titles level={2} color='neutralColor' className='textCenter'> Check our Latest News </Titles> 
          <br/>
           <br/>
          
           <Row align="middle" gutter={30}>
              <Col lg={8} md={8} sm={8} xs={24}>
                  <div className='locationsCard'> 
                    <Image src="/images/video-img.png" alt="video image" width={800} height={800}  />
                    <br/> 
                    <br/> 
                    <a href="#"><ParaText size="medium" color='darkgray'><FaCalendarDay /><b> September 23, 2019</b></ParaText></a> 
                    <Titles level={4}   color='neutralColor' >It is a long established fact that a reader will be distracted</Titles>  
                    <br/> 
                    <a href="#"><ParaText size="large"  color='linkLight'><b>Read More <LuArrowRightCircle /></b></ParaText></a>
                  </div>
              </Col>
              <Col lg={8} md={8} sm={8} xs={24}>
                  <div className='locationsCard'> 
                    <Image src="/images/video-img.png" alt="video image" width={800} height={800}  />
                    <br/> 
                    <br/> 
                    <a href="#"><ParaText size="medium" color='darkgray'><FaCalendarDay /><b> September 23, 2019</b></ParaText></a> 
                    <Titles level={4}   color='neutralColor' >It is a long established fact that a reader will be distracted</Titles>  
                    <br/> 
                    <a href="#"><ParaText size="large"  color='linkLight'><b>Read More <LuArrowRightCircle /></b></ParaText></a>
                  </div>
              </Col>
              <Col lg={8} md={8} sm={8} xs={24}>
                  <div className='locationsCard'> 
                    <Image src="/images/video-img.png" alt="video image" width={800} height={800}  />
                    <br/> 
                    <br/> 
                    <a href="#"><ParaText size="medium" color='darkgray'><FaCalendarDay /><b> September 23, 2019</b></ParaText></a> 
                    <Titles level={4}   color='neutralColor' >It is a long established fact that a reader will be distracted</Titles>  
                    <br/> 
                    <a href="#"><ParaText size="large"  color='linkLight'><b>Read More <LuArrowRightCircle /></b></ParaText></a>
                  </div>
              </Col>
            </Row> 
      </div>
    </div>
    </>
  )
}
