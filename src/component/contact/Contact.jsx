import React from 'react'
import ContactForm from './contact-form/ContactForm';
import Section5 from '../about/section5/Section5'

const Contact = () => {
  return (
  <>
  <section className="page-title-area" style={{ backgroundImage: 'url(assets/img/about.jpg)' }}>
  <div className="container">
    <div className="title-area-data">
      <h2>Contact Us</h2>
      <p>Organisations committed to ending poverty worldwide.</p>
    </div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
    </ol>
  </div>
</section>

<section className="gap">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-md-6">
        <div className="get-involved data contact">
          <i>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
            >
              <path d="M437.15,74.817C388.895,26.571,324.561,0,256,0C187.587,0,123.279,26.65,74.92,75.041C26.559,123.435-0.048,187.766,0,256.184c0.048,68.507,27.005,132.938,75.905,181.425C124.335,485.629,188.219,512,255.997,512c0.677,0,1.357-0.002,2.035-0.008c44.288-0.345,87.858-12.192,126.001-34.262l-15.024-25.967c-33.653,19.472-72.109,29.925-111.21,30.23c-60.48,0.456-117.575-22.858-160.77-65.688C53.847,373.49,30.043,316.616,30,256.163C29.958,195.762,53.447,138.97,96.141,96.247C138.832,53.527,195.605,30,256,30c124.595,0,225.979,101.365,226,225.959c0.008,49.387-15.621,96.298-45.198,135.661c-2.573,3.424-6.37,5.478-10.692,5.784c-4.368,0.308-8.658-1.291-11.756-4.388l-20.406-20.406l9.06-9.06l-70.711-70.711l-28.284,28.284c-58.885-7.935-105.202-54.252-113.137-113.137l28.284-28.284l-70.711-70.711l-39.054,39.054c-3.826,66.249,19.552,133.776,70.167,184.391s118.142,73.993,184.391,70.167l8.782-8.781l20.406,20.406c9.247,9.247,22.033,14.022,35.082,13.1c12.935-0.913,24.803-7.36,32.563-17.688C494.3,365.039,512.01,311.895,512,255.954C511.988,187.393,485.406,123.064,437.15,74.817z"/>
            </svg>
          </i>
          <h3>Phone No</h3>
          <h6>Phone: <a href="callto:7719000078">7719000078</a></h6>
          <h6 style={{ marginLeft: '62px' }}><a href="callto:7300009849">7300009849</a></h6>
        </div>
      </div>

      <div className="col-xl-4 col-md-6">
        <div className="get-involved data contact">
          <i>
            <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_34" data-name="Layer 34">
                <path d="m30 9v14a3 3 0 0 1 -3 3h-22a3 3 0 0 1 -3-3v-14a2.87 2.87 0 0 1 .19-1l12.15 8.1a3 3 0 0 0 3.32 0l12.15-8.1a2.87 2.87 0 0 1 .19 1zm-13.45 5.43 12-8a3 3 0 0 0 -1.55-.43h-22a3 3 0 0 0 -1.54.44l12 8a1 1 0 0 0 1.09-.01z"/>
              </g>
            </svg>
          </i>
          <h3>Email Id</h3>
          <h6><a href="mailto:sidhimanfoundation@gmail.com">sidhimanfoundation@gmail.com</a></h6>
        </div>
      </div>

      <div className="col-xl-4 col-md-6">
        <div className="get-involved data contact">
          <i>
            <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="m12 22c-.3632813 0-.6972656-.1967773-.8740234-.5141602l-2.3066406-4.1518555c-2.897461-1.2597655-4.819336-4.1606445-4.819336-7.3339843 0-4.4111328 3.5888672-8 8-8s8 3.5888672 8 8c0 3.1733398-1.921875 6.0742188-4.8193359 7.3339844l-2.3066406 4.1518555c-.1767579.3173828-.5107422.5141601-.8740235.5141601zm0-18c-3.3085938 0-6 2.6914063-6 6 0 2.4736328 1.5576172 4.7265625 3.8769531 5.605957.2207031.0839844.4052734.2431641.5195313.4492188l1.6035156 2.8857422 1.6035156-2.8857422c.1142578-.2060547.2988281-.3652344.5195313-.4492188 2.3193359-.8793945 3.8769531-3.1323242 3.8769531-5.605957 0-3.3085937-2.6914062-6-6-6zm0 9c-1.6542969 0-3-1.3457031-3-3s1.3457031-3 3-3 3 1.3457031 3 3-1.3457031 3-3 3zm0-4c-.5517578 0-1 .4487305-1 1s.4482422 1 1 1 1-.4487305 1-1-.4482422-1-1-1z"/>
              </g>
            </svg>
          </i>
          <h3>Address</h3>
          <h6>#6, Galaxy Tower,  Bishan Sawroop Colony, Panipat, Haryana</h6>
        </div>
      </div>
    </div>
  </div>
</section>


<ContactForm/>

<Section5 />

  </>
  )
}

export default Contact
