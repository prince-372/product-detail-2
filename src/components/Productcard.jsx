import React from 'react'
import cardimg1 from "../assets/image/cardimg1.png";
import cardimg2 from "../assets/image/cardimg2.png";
import { Col, Container, Row } from "react-bootstrap";
const myinfo = [{
    img: cardimg1,
},
{
    img: cardimg2,
},
{
    img: cardimg1,
},
{
    img: cardimg2,
}]
const Productcard = () => {
    const mydata = myinfo.map((myinfo) => (
        <Col xl={3} lg={4} className="col-sm-6 mt-3">
        <div className="card-footloker">
          <div className="img-padding-foot">
            <img src={myinfo.img} alt="footlooker" className='w-100'/>
          </div>
          <div className="down-content-padding">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3 align-items-center">
                <p className="mb-0 text-light-black3 ff-poppins fs-l-sm fw-normal lh-125">
                  Price:
                </p>
                <p className="mb-0 text-black fs-m-md fw-semibold lh-125">
                  €179,99
                </p>
              </div>
              <div>
                <button className="text-white ff-poppins fs-s-sm fw-normal lh-12 bestprize-button">
                  Best Price
                </button>
              </div>
            </div>
            <p className="mb-0 text-light-black3 ff-poppins fs-l-sm fw-normal lh-125 pt-3">
              Size:
            </p>
            <div className="d-flex align-items-center pt-2 justify-content-between">
              <div className="size-chart">
                <p className="mb-0 text-light-black2 ff-poppins fs-l-sm fw-medium lh-125 text-center">
                  41
                </p>
              </div>
              <div className="size-chart">
                <p className="mb-0 text-light-black2 ff-poppins fs-l-sm fw-medium lh-125 text-center">
                  42
                </p>
              </div>
              <div className="size-chart">
                <p className="mb-0 text-light-black2 ff-poppins fs-l-sm fw-medium lh-125 text-center">
                  43
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center pt-2 justify-content-between mb-1">
              <div className="size-chart">
                <p className="mb-0 text-light-black2 ff-poppins fs-l-sm fw-medium lh-125 text-center">
                  44
                </p>
              </div>
              <div className="size-chart">
                <p className="mb-0 text-light-black2 ff-poppins fs-l-sm fw-medium lh-125 text-center">
                  45
                </p>
              </div>
              <div className="size-chart">
                <p className="mb-0 text-light-black2 ff-poppins fs-l-sm fw-medium lh-125 text-center">
                  46
                </p>
              </div>
            </div>
            <p className="mb-0 text-khakigreen ff-poppins fs-l-sm fw-normal lh-125 pt-3">
              View this product as:
            </p>
            <p className="text-blue ff-poppins fs-l-sm fw-semibold lh-125 mb-0 pt-2">
              Foot Locker NL
            </p>
          </div>
        </div>
      </Col>
    ))
  return (
    <div  className="pt-2 mt-2 mt-md-4 pt-md-5 pb-1" id="sneakerkopen">
        <Container>
      <h2 className="text-black ff-poppins fs-s-lg fw-medium lh-31">
        You can buy the Nike Air Max 97 Men's Shoe - White here:
      </h2>
      <Row className="pt-4">
       {mydata}
      </Row>
    </Container>
    </div>
  )
}

export default Productcard