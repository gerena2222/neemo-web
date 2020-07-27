import Header from '../component/header';
import Footer from '../component/footer';
import Layout from '../component/layout';
export default ()=>{
    return(
        <div>
            <Header/>
            <Layout>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Profil</h1>
                    </div>
                </div>
                <section id="about" className="about section-bg">
                <div className="container">
                    <div className="row">
                        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                                <div className="content d-flex flex-column justify-content-center">
                                    <h3 data-aos="fade-in" data-aos-delay="100">Hello Radhitya Insyafi Maulud</h3>
                                    <p data-aos="fade-in">
                                        Saya Seorang Newbie Yang Menyukai Bidang I.T.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 icon-box" data-aos="fade-up">
                                            <h4><a href="#">Lokasi</a></h4>
                                            <p>JL. Ikan Kerapu 74 Karangrejo, Banyuwangi</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <h4><a href="#">Tempat Tanggal Lahir</a></h4>
                                            <p>Banyuwangi,22 Juli 1998</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                            <i className="bx bx-images"></i>
                                            <h4><a href="#">Pendidikan</a></h4>
                                            <p>
                                                <ul>
                                                    <li><a>Lulus Dari SDN Kepatihan Banyuwangi</a></li>
                                                    <li><a>Lulus Dari SMPN 1 Giri Banyuwangi</a></li>
                                                    <li><a>Lulus Dari SMAN 1 Banyuwangi</a></li>
                                                    <li><a>Lulus Dari Magistra Utama Banyuwangi</a></li>
                                                    <li><a>Sedang Menjalani Kuliah Di STIKOM PGRI Banyuwangi</a></li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                            <i className="bx bx-shield"></i>
                                            <h4><a href="#">Hobi</a></h4>
                                            <p>
                                                <ul>
                                                    <li><a>Bermain Game</a></li>
                                                    <li><a>Gambar Anime</a></li>
                                                    <li><a>Bermain Musik</a></li>
                                                    <li><a>Utak Atik Elektronika</a></li>
                                                    <li><a>Buat Video Tutorial</a></li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
            <Footer/>

            <style jsx>{`
                p{
                    color : black;
                }
                .jumbotron{
                    margin-top : 90px;
                    background: url(/bahan/back.jpg) center center;
                    background-size: cover;
                    background-position: center center;
                    position: relative;
                }
                h1, .lead {
                    color : white;
                    font-family : Geometr415 Blk BT;
                }
                section {
                    padding: 60px 0;
                    overflow: hidden;
                }
                  
                .section-bg {
                    background: linear-gradient(180deg, #f2f6fa 0%, #fff 100%);
                }
                
                .section-title {
                    text-align: center;
                    padding-bottom: 30px;
                }
                
                .section-title h2 {
                    font-size: 32px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    position: relative;
                    font-family: "Poppins", sans-serif;
                    color: #213b52;
                }
                
                .section-title h2::before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 120px;
                    height: 1px;
                    background: #ddd;
                    bottom: 1px;
                    left: calc(50% - 60px);
                }
                
                .section-title h2::after {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 40px;
                    height: 3px;
                    background: #fdc134;
                    bottom: 0;
                    left: calc(50% - 20px);
                }
                
                .section-title p {
                    margin-bottom: 0;
                }
                .about .content {
                    padding: 30px 0;
                }
                
                .about .content h3 {
                    font-weight: 700;
                    font-size: 34px;
                    color: #213b52;
                }
                
                .about .content p {
                    margin-bottom: 0;
                }
                
                .about .content .icon-box {
                    margin-top: 25px;
                }
                
                .about .content .icon-box h4 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 5px 0 10px 60px;
                    color: #213b52;
                }
                
                .about .content .icon-box h4 a {
                    color: #213b52;
                    transition: 0.3s;
                }
                
                .about .content .icon-box h4 a:hover {
                    color: #fdc134;
                }
                
                .about .content .icon-box i {
                    font-size: 48px;
                    float: left;
                    color: #fdc134;
                }
                
                .about .content .icon-box p {
                    font-size: 15px;
                    color: #848484;
                    margin-left: 60px;
                }
                
                .about .image {
                    background: url("/bahan/IMG20191228121825.jpg") center center no-repeat;
                    background-size: cover;
                    min-height: 400px;
                }
                
                @media (max-width: 667px) {
                    .about .image img {
                        max-width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}