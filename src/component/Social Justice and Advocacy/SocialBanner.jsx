import React from 'react'

const SocialBanner = () => {
  return (
   <>
   <section className="page-title-area" style={{ backgroundImage: 'url(assets/img/about.jpg)' }}>
  <div className="container">
    <div className="title-area-data">
      <h2>Why Social Justice and Advocacy?
</h2>
      {/* <p>Empowering the Underserved Through Education and Self-Reliance</p> */}
    </div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="index.html">Home</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">Why Social Justice and Advocacy?
</li>
    </ol>
  </div>
</section>

<section className="small-donations" style={{ marginTop: '100px' }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="heading two">
          {/* <p>charity Act Today!</p> */}
          <h2 className="pb-3">Why Social Justice and Advocacy?
</h2>
        <p style={{color:'#555',fontSize:'16px',fontWeight:400,textTransform:'none',lineHeight:'30px'}}>Social justice is the foundation of a fair and equitable society. At Sidhiman Foundation, we believe that every individual deserves equal opportunities, regardless of their background, gender, or socio-economic status. Advocacy is our way of amplifying the voices of the marginalized, challenging systemic inequalities and creating pathways for inclusive growth.
By promoting social justice, we aim to dismantle barriers that hinder progress and foster an environment where everyone can thrive. Advocacy allows us to influence policies and spark meaningful change at local, national, and global levels.
</p>
       
        </div>

        {/* <div className="get-involved develop">
          <i>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
               <path d="M496.997,481.966h-45.999V239.473l0.347,0.245c6.568,4.635,15.62,3.27,20.528-3.095l37.006-47.987
                  c2.491-3.231,3.559-7.337,2.958-11.372c-0.601-4.035-2.821-7.651-6.146-10.015L282.83,8.849c-15.829-11.753-37.83-11.753-53.658,0
                  L6.31,167.249c-3.297,2.344-5.508,5.92-6.131,9.917s0.395,8.076,2.823,11.312l36.006,47.987
                  c4.803,6.402,13.787,7.906,20.413,3.415l1.583-1.072v243.158H15.004c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h481.994
                  c8.284,0,15-6.716,15-15C511.998,488.682,505.281,481.966,496.997,481.966z M211.001,315.969c0,11.517,4.354,22.032,11.495,30
                  c-7.142,7.968-11.495,18.483-11.495,30c0,8.67,0,81.918,0,90.999c0,8.271-6.729,15-15,15c-8.271,0-15-6.729-15-15v-60.999
                  c0-8.284-6.716-15-15-15h-15v-74.999c0-24.813,20.187-44.999,45-44.999c11.239,0,21.882,4.202,30.019,11.479
                  C216.809,290.694,211.001,302.664,211.001,315.969z M181.001,225.969c0-8.271,6.729-15,15-15c8.271,0,15,6.729,15,15
                  s-6.729,15-15,15C187.73,240.969,181.001,234.24,181.001,225.969z M271,466.967c0,8.271-6.729,15-15,15s-15-6.73-15-15
                  c0-9.212,0-82.301,0-90.999c0-8.271,6.729-15,15-15s15,6.729,15,15C271,384.638,271,457.886,271,466.967z M256,330.968
                  c-8.271,0-15-6.729-15-15c0-8.271,6.729-15,15-15s15,6.729,15,15C271,324.239,264.271,330.968,256,330.968z M345.999,390.966
                  L345.999,390.966c-8.284,0.001-15,6.717-15,15.001v60.999c0,8.271-6.729,15-15,15c-8.271,0-15-6.729-15-15
                  c0-9.212,0-82.301,0-90.999c0-11.517-4.354-22.032-11.495-30c7.142-7.968,11.495-18.483,11.495-30
                  c0-4.85-0.781-9.519-2.207-13.899c1.615-0.663,3.517-1.101,5.748-1.101h22.918c11.155,0,18.402,11.737,13.416,21.708
                  l-8.292,16.583c-2.111,4.223-2.111,9.193,0,13.416l19.146,38.292H345.999z M300.999,255.969c0-8.271,6.729-15,15-15
                  c8.271,0,15,6.729,15,15c0,8.271-6.729,15-15,15C307.728,270.969,300.999,264.24,300.999,255.969z M420.998,210.525v271.441
                  h-62.579c1.665-4.695,2.58-9.741,2.58-15v-46h15c5.199,0,10.027-2.692,12.76-7.114s2.981-9.944,0.657-14.594l-26.646-53.291
                  l4.938-9.875c10.052-20.104,3.671-43.644-13.516-56.365c4.308-6.901,6.808-15.041,6.808-23.759
                  c0-24.813-20.187-44.999-44.999-44.999c-24.813,0-45,20.187-45,44.999c0,6.945,1.583,13.526,4.405,19.405
                  c-5.878-2.821-12.459-4.404-19.402-4.405c-6.159-8.203-13.88-14.973-22.61-19.995c4.801-7.156,7.607-15.759,7.607-25.005
                  c0-24.813-20.187-45-45-45c-24.813,0-44.999,20.187-44.999,45c0,9.254,2.81,17.862,7.618,25.022
                  c-22.46,12.972-37.618,37.23-37.618,64.977v89.999c0,8.284,6.716,15,15,15h15v46c0,5.258,0.915,10.305,2.58,15H91.003V210.525
                  c0-12.007-13.465-19.159-23.415-12.417l-13.163,8.919l-18.189-24.243l210.451-149.58c0.104-0.074,0.208-0.15,0.31-0.227
                  c5.301-3.976,12.705-3.976,18.006,0c0.103,0.077,0.206,0.152,0.31,0.227l210.286,149.462l-18.701,24.25l-12.25-8.646
                  C434.722,191.265,420.998,198.392,420.998,210.525z"/>
            </svg>
          </i>
          <div>
            <p>
              - Empower underprivileged individuals through education, healthcare, and economic development initiatives<br />
              - Foster community growth and social cohesion in Panipat and beyond
            </p>
          </div>
        </div> */}
      </div>
      <div className="col-lg-6">
        <div className="small-donations-img">
          <img className="w-100" alt="charity" src="assets/img/social-justice.jpg" style={{borderRadius:'30px'}} />
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default SocialBanner