import React from "react";
import VMC from './inc/Vmc';

function About(){
    return(
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>

                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>

                        </div>
                    </div>

                </div>

            </section>
            <section className="section  border-bottm">
                <div className="conainer">
                    <h5 className="main-heading"> Practo</h5>
                    <div className="underline"></div>
                    <p>
                    We are give you the service that everyone will get benefits
                    </p>

                </div>

            </section>


        </div>
    )
}


export default About;