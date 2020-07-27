import Header from '../component/header';
import Footer from '../component/footer';
import Layout from '../component/layout';
import Link from 'next/link';
export default ()=>{
    return(
        <div>
            <Header/>
            <Layout>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="/bahan/Genie.png" height="auto" width="500"/>
                            </div>
                            <div className="col">
                            <form method="post" action="#">
                                <div className="form-group">
                                    <label for="">Username</label>
                                    <input type="text" className="form-control" name="nama" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <label for="">Password</label>
                                    <input type="password" className="form-control" name="email" placeholder="Password"/>
                                </div>
                                <Link href="/index">
                                    <a className="btn btn-primary">Login</a>
                                </Link>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <Footer/>
            <style jsx>{`
                .jumbotron{
                    margin-top : 90px;
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