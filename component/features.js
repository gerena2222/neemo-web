import Content from '../component/layout';
export default ()=>{
    return(
        <div>
            <div className="feat">
                <div className="container">
                    <h3 className="display-6">Banyak Sekali Tutorial</h3>
                    <Content>
                        <div className="row">
                            <div className="row">
                                <div className="col col-sm">
                                    <div className="card">
                                        <iframe className="frame" width="255" height="auto" src="https://www.youtube.com/embed/rmevNGXVK0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">Next Js + Moltin</h5>
                                            <p className="card-text">Hanya Contoh Saja </p>
                                            <a href="#" className="btn btn-primary">Klik Disini</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm">
                                    <div className="card">
                                        <iframe className="frame" width="255" height="auto" src="https://www.youtube.com/embed/QNHTHXLqUiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">Next Js Bagian 5</h5>
                                            <p className="card-text">Hanya Contoh Saja</p>
                                            <a href="#" className="btn btn-primary">Klik Disini</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm">
                                    <div className="card">
                                        <iframe className="frame" width="255" height="auto" src="https://www.youtube.com/embed/ScJHeZSwrTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">Binary Search</h5>
                                            <p className="card-text">Hanya Contoh Saja</p>
                                            <a href="#" className="btn btn-primary">Klik Disini</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm">
                                    <div className="card">
                                        <iframe className="frame" width="255" height="auto" src="https://www.youtube.com/embed/8nE7hldwr1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div className="card-body">
                                            <h5 className="card-title">HUD Audio Spectrum In After Effects</h5>
                                            <p className="card-text">Hanya Contoh Saja</p>
                                            <a href="#" className="btn btn-primary">Klik Disini</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </div>
            </div>

            <style jsx>{`
                .feat{
                    height: -128px;
                }
                .feat .display-6{
                    text-align : center;
                    margin-bottom : 28px;
                }
                .card{
                    width : 16rem;
                }
                .row{
                    margin-bottom : 18px;
                }
            `}</style>
        </div>
    );
}