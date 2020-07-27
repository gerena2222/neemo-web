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
                        <h1 className="display-4">Latihan</h1>
                        <p className="lead">Setelah Melihat Video Pembelajaran <br/> Ayo Mencoba Menerapkannya</p>
                    </div>
                </div>
                <div className="alert alert-primary" role="alert">
                    Masih Belum Ada Latihan
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </Layout>
            <Footer/>

            <style jsx>{`
                .jumbotron{
                    margin-top : 90px;
                    background: url(/bahan/new.jpg) center center;
                    background-size: cover;
                    background-position: center center;
                    position: relative;
                }
                h1,p {
                    color : white;
                    font-family : Geometr415 Blk BT;
                }
            `}</style>
        </div>
    );
}