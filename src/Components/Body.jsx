import React from 'react'
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap'

function Body() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className="col-lg-5">

              <div className='d-flex justify-content-center align-items-center mt-5'><h3 className='fw-bolder'>Get more from Copilot</h3></div>
              <div className='d-flex justify-content-center align-items-center ms-5'><h5>See how your everyday AI companion can help <br /> enhance life and work.</h5></div>
              <div className='d-flex justify-content-center align-items-center mb-5'><button style={{ border: 'none' }} className='bg bg-info fw-bolder text-white p-2 '>For Individuals</button></div>

            </div>
            <div className="col-lg-7  ">
              <img style={{ height: '620px' }}
                className="d-block w-100"
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-Copilot-001:VP2-859x540"
                alt="First slide"
              />

            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div className='row  d-flex justify-content-center align-items-center'>
            <div className="col-lg-7">
              <img style={{ height: '620px' }}
                className="d-block w-100"
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540"
                alt="second slide"
              />
            </div>
            <div className="col-lg-5   bg-body-Secondary ">
              <div className='d-flex justify-content-start align-items-center'><h3 className='fw-bolder'>Surface Pro 9</h3></div>
              <div className='d-flex justify-content-start align-items-center'><h5>Tablet versatility and laptop power — all in one <br />ultra-portable device</h5></div>
              <button style={{ border: 'none' }} className='bg bg-info fw-bolder text-white p-2 '>Learn More</button>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>


      {/* links  */}




      <div className='m-5 text-center d-flex justify-content-center'>
        <Container>

          <Row>
            <Col sm>
              <i className="fa-brands fa-microsoft fa-2x"></i><br />
              <a className='text-info text-center fw-bolder' href="">Shop Xbox games and consoles</a>
            </Col>
            <Col sm>
              <i className="fa-brands fa-xbox fa-2x"></i><br />
              <a className='text-info text-center fw-bolder' href="">Shop Xbox games and consoles</a>
            </Col>
            <Col sm>
              <i className="fa-brands fa-microsoft fa-2x"></i><br />
              <a className='text-info text-center fw-bolder' href="">Get Windows 11</a>
            </Col>
            <Col sm>
              <i className="fa-solid fa-tablet-screen-button fa-2x"></i><br />
              <a className='text-info text-center fw-bolder' href="">Explore Surface Devices</a>
            </Col>
          </Row>
        </Container>
      </div>



      {/* cards */}


      <div className='container'>
        <div className=' row d-flex justify-content-center align-items-center '>
          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Surface Laptop 5</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Surface Laptop Studio</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'>X box Series X</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Shop X box Series X <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'> Microsoft 365</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">For one person <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

        </div>

      </div>





      {/*  X box */}


      <div className=' mt-5 container'>
        <div className=' row d-flex justify-content-center align-items-center'>
          <div className='col-lg-6  '>
            <h1 className='fw-bolder'>Xbox Series S</h1>
            <h5>Next-gen performance in the smallest Xbox <br />ever</h5>
            <button className='btn btn-info'>Shop Xbox series X</button>
          </div>

          <div className='col-lg-6 mt-5'>
            <img className='w-100' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP2-859x540" alt="" />
          </div>
        </div>
      </div>

      {/* for business */}


      <div className='container mt-5'>
        <h1 className='fw-bolder '>For business</h1>
      </div>


      {/* card */}


      <div className='container mb-5'>
        <div className=' row d-flex justify-content-center align-items-center '>
          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Surface for Business</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Shop Now <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Microsoft Teams</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Sign Up for free <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Join the era of AI</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Explore AI solution  <i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img className='mt-3' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/JIC-DPS-CP01?wid=406&hei=230&fit=crop" />
            <Card.Body>
              <Card.Title className='fw-bolder'> Microsoft 365 Cloud PC</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <a style={{ textDecoration: 'none' }} className='text-info fw-bolder' href="">Get it Today<i className="fa-solid fa-arrow-right"></i></a>
            </Card.Body>
          </Card>

        </div>

      </div>


      {/* icons */}

      <div className='container mt-3'>
        <h3>Follow Microsoft
          <a style={{ color: 'black' }} href=""><i className="fa-brands fa-facebook m-3"></i></a>
          <a style={{ color: 'black' }} href=""><i className="fa-brands fa-x-twitter m-3"></i></a>
          <a style={{ color: 'black' }} href=""><i className="fa-brands fa-youtube m-3"></i></a>
        </h3>

      </div>





    </>


  )
}

export default Body

