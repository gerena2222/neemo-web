import Link from 'next/link';

export default ()=>{
    return(
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Empower Yourself</h1>
                    <hr className="my-4"/>
                    <p className="lead">Kursus online gratis dari para pakar terkemuka dunia.
                    <br/>Bergabunglah dengan 15 juta pelajar hari ini</p>
                    <hr className="my-4"/>
                    <Link href="/signup">
                        <a className="btn btn-success btn-sm" role="button">Sign Up Now</a>
                    </Link> 
                </div>
            </div>

            <style jsx>{`
                h1,p {
                    font-family : Geometr415 Blk BT;
                }
                .jumbotron {
                    background: url("/bahan/baru.jpg") center center;
                };
                .jumbotron .display-4{
                    margin-top : 50px;
                    color : white;
                };
                .jumbotron p{
                    color : white;
                    font-size : 20px;
                }.
            `}</style>
        </div>
    );
}