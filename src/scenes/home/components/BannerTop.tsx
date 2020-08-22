import React from "react";

const BannerTop = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="w3l_banner_nav_left">
          <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
            <li className="list-group-item">Vestibulum at eros</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div className="w3l_banner_nav_right">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                    <img src={require('../../../images/1.jpg')} alt="Los Angeles"/>
                    </div>

                    <div className="item">
                    <img src={require('../../../images/2.jpg')}  alt="Chicago"/>
                    </div>

                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
                </a>

            </div>
        </div>

        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default BannerTop;
