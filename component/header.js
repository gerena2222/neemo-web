import Link from 'next/link';
import Head from 'next/head';

export default ()=>{
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
                <link rel="icon" href="/bahan/Geniel.png"></link>
                <title>Genie.Co</title>
            </Head>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className ="container">
                    <Link href="/index">
                        <a className="navbar-brand">
                            <img src="/bahan/Genie.png" width="auto" height="50" alt="" loading="lazy"/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/index">
                                    <a className="nav-link">Beranda</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link">Profil</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/video">
                                    <a className="nav-link">Video Pembelajaran</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/latihan">
                                    <a className="nav-link">Latihan</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/hubungi">
                                    <a className="nav-link">Hubungi Kami </a>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <form className="form-inline ml-6">
                                <Link href="/login">
                                    <button className="btn btn-sm btn-success" type="button">Sign Up</button>
                                </Link>
                                <Link href="/signup">
                                    <button className="btn btn-sm btn-dark" type="button">Login Now</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            
            <style jsx>{`
                .navbar{
                    background-color : #000000;
                }
            `}</style>
        </div>
    );
}