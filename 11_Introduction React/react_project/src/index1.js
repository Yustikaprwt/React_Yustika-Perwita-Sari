import React from "react";

function index1() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link href="asset/css/bootstrap.min.css" rel="stylesheet" />
        <link href="asset/css/main.css" rel="stylesheet" type="text/css" />
        <link href="asset/js/bootstrap.min.js" rel="stylesheet" />
        <title>Beranda</title>
        <header>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="alterra">
                  <a href="index.html"><img className="logo-atas" src="asset/img/logo-ALTA@2x.png" /></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                {/* <div class="container"> */}
                <div className="row align-items-center navig">
                  <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" className="aktif">HOME</a></div>
                  <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                  <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                  <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div> 
                </div>
                {/* </div> */}
              </div>    
            </div>
          </div> 
        </header>
        <div className="container h-100">
          <div className="row align-items-center isi-home">
            <div className="col-lg-4 col-md-12 col-sm-12  col-12">
              <img id="foto-profil" src="asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="main-p">
                <p className="sapaan">Hi, my name is </p>
                <p className="nama">Anne Sullivan</p>
                <p className="hobi">I build things for the web</p>
                <p className="tombol"><a href="about.html">Get In Touch</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default index1;
