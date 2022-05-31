import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "./MasterForm";
import { Container, Row, Col } from "reactstrap";

// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./MultiStepProgressBar.css";


function CampaignForm() {
  return (
    <a href="">
      <div className="pt-96 mt-28 main" >
      {/* <Helmet>
        <style>{"body { background-image:url(https://th.bing.com/th/id/OIP.a7zcxkWpyz-ZV0e_dRu_WwHaEl?pid=ImgDet&w=1280&h=792&rs=1); background-size: cover; }"}</style>
      </Helmet> */}
      <Container>
        <Row>
          <Col>
            <MasterForm />
          </Col>
        </Row>
      </Container>
    </div>
    </a>
  )
}

export default CampaignForm
