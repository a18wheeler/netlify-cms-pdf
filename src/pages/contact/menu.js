import React from "react";
import Layout from "../../components/Layout";
// import { Document } from "react-pdf";
// import pdf from "./example.pdf";
import Reader from "../../components/Reader";

export default class Index extends React.Component {
  render() {
    // let styles = {
    //   border: "none"
    // };
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              This is where a pdf should go.
              <br />
              <Reader />
              {/* <object
                data={pdf}
                type="application/pdf"
                width="100%"
                height="1000"
              >
                <p>
                  Your browser does not support PDFs.
                  <a href={pdf}>Download the PDF</a>.
                </p>
              </object> */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
