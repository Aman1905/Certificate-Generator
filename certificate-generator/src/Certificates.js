import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class Certificates extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
    CertDate: "",
    Topic: "",
    Code: ""
  };
  render() {
    return (
      <>
      <div className="App container-fluid">
        <div class="row align-items-start">
        <div class="col-4">
          <div className="Meta">
            <h1>NiiT Certificates</h1>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter your Name</label>
              <input type="text" placeholder="Please enter your name" value={this.state.Name} onChange={(e) => {
                this.setState({ Name: e.target.value }); }} />
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Enter the Date</label>
              <input type="text" placeholder="Please enter the date" value={this.state.CertDate} onChange={(e) => {
                this.setState({ CertDate: e.target.value }); }} />
            </div>

            <div className="mb-3">
              <label htmlFor="topic" className="form-label">Enter the Topic</label>
              <input type="text" placeholder="Please enter the Topic" value={this.state.Topic} onChange={(e) => {
                this.setState({ Topic: e.target.value }); }} />
            </div>

            <div className="mb-3">
              <label htmlFor="code" className="form-label">Enter the Verification Code</label>
              <input type="text" placeholder="Please enter the Code" value={this.state.Code} onChange={(e) => {
                this.setState({ Code: e.target.value }); }} />
            </div>

            <button type="button" className="btn btn-primary btn-lg me-3"
              onClick={(e) => {
                e.preventDefault(); 
                exportComponentAsPNG(this.certificateWrapper, {
                  html2CanvasOptions: { backgroundColor: null }
                });
              }}>
              Download
            </button>
          </div>
        </div>
        <div className="col-8">
        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p className="text1">{this.state.Name}</p>
            <p className="text2">{this.state.CertDate}</p>
            <strong><p className="text3">{this.state.Topic}</p></strong>
            <p className="text4">{this.state.Code}</p>
            <img src="https://i.imgur.com/YuvxNod.png" alt="Certificate" />
          </div>
        </div>
        </div>
        </div>
      </div>
      </>
    );
  }
}

export default Certificates;
