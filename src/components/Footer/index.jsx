import './styles.scss'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { Route ,Link } from 'react-router-dom'

const Footer = () => {


    return (

        <div className="container-fluid bg-black text-white footerContainer" >

                {/**Desktop view */}
            <div className="container d-none d-lg-block d-lg-flex ">

                <div className="row">

                <div className="col-lg-6">
            <div className="footerLeft">
            <h4>audiophile</h4>

            <p className="footDesc type__body">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <p className="type__body">Copyright 2021. All Rights Reserved</p>
            </div>
            </div>

<div className="col-lg-6 rightBuff">
            <div className="footerRight">
            
            <div className="d-flex justify-content-between type__H6 navList">
                <Link to="/">
                <p>HOME</p>
                </Link>
                <Link to='/category/headphones'>
                <p>HEADPHONES</p>
                </Link>
                <Link to='/category/speakers'>
                <p>SPEAKERS</p>
                </Link>
                <Link to='/category/earphones'>
                <p>EARPHONES</p>
                </Link>
            </div>
            
            <div className="iconContainer d-flex justify-content-between">
            <a href="https://github.com/Soma586">
                <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/tarikm35/">
                <FaLinkedin/>
                </a>
                <a href="https://github.com/Soma586/audiophile">
                <FaInstagram/>
                </a>
            </div>
            </div>
                
            </div>
            </div>
            </div>

                {/**Tablet and lower */}
            <div className=" container d-lg-none mobileFoot">
                <h4 className="mb-5">audiophile</h4>

                <div className="d-sm-flex justify-content-between type__H6 navList mb-5 buff w-100">
                <Link to="/">
                <p>HOME</p>
                </Link>
                <Link to='/category/headphones'>
                <p>HEADPHONES</p>
                </Link>
                <Link to='/category/speakers'>
                <p>SPEAKERS</p>
                </Link>
                <Link to='/category/earphones'>
                <p>EARPHONES</p>
                </Link>

              
            </div>
            <p className="type__body">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>

            <div className="d-sm-flex justify-content-between">
                <p className="type__body">Copyright 2021. All Rights Reserved</p>

                <div className="iconContainer d-flex justify-content-between">
                <a href="https://github.com/Soma586">
                <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/tarikm35/">
                <FaLinkedin/>
                </a>
                <a href="https://github.com/Soma586/audiophile">
                <FaInstagram/>
                </a>
                </div>
                
            </div>
            
                
            </div>

        </div>
    )

}


export default Footer