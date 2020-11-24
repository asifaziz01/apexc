import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {Navbar, Nav, Container, Row, Col} from "react-bootstrap"
import Styles from "./banner.module.css"

const Banner = ({data}) =>  {

  const {wpPage} =  useStaticQuery (graphql`
    {
      wpPage(acfFGHomepage: {}) {
        acfFGHomepage {
          bannerButton1Icon
          bannerButton1Link
          bannerButton1Text
          bannerButton2Icon
          bannerButton2Link
          bannerButton2Text
          bannerDescription
          bannerTitle
          
        }
      }
    }
  `)

  console.log (wpPage)

  return(
    <section>
      <div className={Styles.hero_section}>
        <Container>
          <Row>
            <Col md="6" className="">
              <h1 className="apex-title-color">{wpPage.acfFGHomepage.bannerTitle}</h1>
              <p>Enrol yourself into one of UGC NET Best Coaching Institutes in India. We have qualified and experienced faculty to make your study wholesome.</p>
              <div> 
                <a href="#" className="apex-default-btn mr-3 mb-2"> <i className="fa fa-book"></i>View All Courses<span></span> </a> 
                <a href="#" className="apex-default-btn"> <i className="fa fa-laptop"></i>Take A Free Demo<span></span> </a> 
              </div>
            </Col>

            <Col md="6">
            asas
            </Col>
          </Row>
        </Container>
      </div>
    </section>    
)}


export default Banner