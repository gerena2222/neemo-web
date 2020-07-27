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
                        <h1 className="display-4">Hubungi Kami</h1>
                        <p>Customer Service</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="/bahan/Genie.png" height="auto" width="500"/>
                            <h1 className="blue">Kontak Kami</h1>
                            <p className="neo">
                            Silahkan tinggalkan pesan anda, pada kolom yang tersedia.
                            </p>
                        </div>
                        <div className="col">
                        <form method="post" action="#">
                            <div className="form-group">
                                <label for="">Nama Anda:</label>
                                <input type="text" className="form-control" name="nama" placeholder="Masukkan Nama"/>
                            </div>
                            <div className="form-group">
                                <label for="">E-mail Anda:</label>
                                <input type="email" className="form-control" name="email" placeholder="Masukkan Email"/>
                            </div>
                            <div className="form-group">
                                <label for="">Pesan Anda:</label>
                                <textarea name="pesan" className="form-control" cols="30" rows="7"></textarea>
                            </div>
                            <input className="btn btn-primary" type="submit" value="Masukan"/>
                        </form>
                        </div>
                    </div>
                </div>
            </Layout>
            <Footer/>
            <style jsx>{`
                .jumbotron{
                    margin-top : 90px;
                    background: url(/bahan/kon.jpg) center center;
                    background-size: cover;
                    background-position: center center;
                    position: relative;
                }
                .blue, .neo {
                    color : black;
                }
                h1,p {
                    color : white;
                    font-family : Geometr415 Blk BT;
                }
                p{
                    font-size : 25px;
                }
            `}</style>
        </div>
    );
}