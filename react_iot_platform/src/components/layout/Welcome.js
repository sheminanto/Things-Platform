import React from 'react'
import '../../welcome.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsCloudUpload, BsGraphUp, BsExclamationTriangle } from 'react-icons/bs';
import { Redirect } from 'react-router-dom';
function Welcome() {
    if (localStorage.getItem('token')) return <Redirect to='/'></Redirect>
    return (
        <div className="container-fluid">
            <header>
                <div id="intro">
                    <div className="mask rgba-black-strong">

                        <div className="container-fluid d-flex align-items-center justify-content-center h-100">

                            <div className="row d-flex justify-content-center text-center mt-5">

                                <div className="col-md-12">
                                    <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">Things Platform</h2>
                                    <hr className="hr-light" />
                                    <h4 className="white-text my-4">A Complete solution for your IoT Hub</h4>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </header>
            <main className="mt-5">
                <section id="best-features" className="text-center">
                    <h2 className="mb-5 font-weight-bold">Best Features</h2>
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-8">
                            <p className="grey-text">High speed evolution of IoT is generating more and more sensor data,these data have to be effectively stored and monitored.It demands an effective system for, </p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-4 mb-5">
                                <i className="icon"><BsCloudUpload size={70} /></i>
                                <h4 className="my-4 font-weight-bold">Data Collection & Storage</h4>
                                <p className="grey-text">Collect data generated by your IoT devices and store it in our server securely.</p>
                            </div>

                            <div className="col-md-4 mb-1">
                                <i className="fa fa-heart fa-4x orange-text"><BsGraphUp size={70} /></i>
                                <h4 className="my-4 font-weight-bold">Real-time Montioring</h4>
                                <p className="grey-text">View your devices' data at any time any where.</p>
                            </div>
                            <div className="col-md-4 mb-1">
                                <i className="fa fa-bicycle fa-4x orange-text"><BsExclamationTriangle size={70} /></i>
                                <h4 className="my-4 font-weight-bold">Anomaly Detection & Alert System</h4>
                                <p className="grey-text">Detect anomalies present in your devices' dataset and get notified about the same.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="my-5" />
            </main>
            <footer className="page-footer bg-dark text-light">
                <div className="container">

                    <div className="row py-4 d-flex align-items-center">


                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                        </div>

                        <div className="col-md-6 col-lg-7 text-center text-md-right">

                            <a className="fb-ic mx-2 text-light" href="https://facebook.com">
                                <FaFacebook size={20} />
                            </a>

                            <a className="tw-ic mx-2 text-light" href="https://twitter.com">
                                <FaTwitter size={20} />
                            </a>

                            <a className="ins-ic mx-2 text-light" href="https://instagram.com">
                                <FaInstagram size={20} />
                            </a>
                        </div>


                    </div>

                </div>


            </footer>
        </div>
    )
}

export default Welcome;
