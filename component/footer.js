export default ()=>{
    return(
        <div>
            <div className="footer-top">
                <div className="container">
                    <div className="row multi-columns-row"> 
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3"> 
                            <h4>About Genie.Co</h4> 
                            <ul className="list-normal"> 
                                <li className=""><a href="#">Profil</a></li> 
                                <li className=""><a href="#">Blog</a></li> 
                            </ul> 
                        </div> 
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3"> 
                            <h4>Learning</h4> 
                            <ul className="list-normal"> 
                                <li className=""><a href="#">Video Pembelajaran</a></li> 
                                <li className=""><a href="#">Latihan</a></li> 
                            </ul> 
                        </div> 
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3"> 
                            <h4>Lainya</h4> 
                            <ul className="list-normal"> 
                                <li className=""><a href="#">Pers</a></li> 
                                <li className=""><a href="#">Index</a></li> 
                            </ul> 
                        </div> 
                        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3"> 
                            <h4>Connect to</h4> 
                            <ul className="list-normal"> 
                                <li className=""><a href="#">Instagram</a></li> 
                                <li className=""><a href="#">Facebook</a></li> 
                                <li className=""><a href="#">Twitter</a></li> 
                                <li className=""><a href="#">Github</a></li> 
                                <li className=""><a href="#">Vercel</a></li> 
                            </ul> 
                        </div> 
                    </div>
                </div>
            </div>
            <div className="footer-bot">
                <div className="container"> 
                    <p className="big-foot">Copyright 2020. Developed by Radhitya Insyafi M (1118101563)</p> 
                </div>
            </div>

            <style jsx>{`
                .footer-bot{
                    padding: 8px;
                    background-color: #000000;
                 }
                .big-foot{
                    color: #ffffff;
                    font-size: 15px;
                    text-align: justify;
                    margin : 2px;
                }
                .footer-top{
                    background-color: #F8F8FF;
                    margin-top: 8px;
                }
                
                .list-normal a{
                    color: #000000;
                    font-weight: 20px; 
                }
                h4{
                    margin: 4px;
                    padding: 4px;
                    color: #000000;
                    font-weight: 100px;
                }
            `}</style>
        </div>
    );
}