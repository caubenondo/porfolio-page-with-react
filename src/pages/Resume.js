function Resume(){
    return(
        <div className="container-xl text-center">
            <h1>Resume</h1>
            <p>Downloadable Resume is coming soon...</p>
            <div className="row">
            <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">UX/UI</h4>
                        </div>
                        <div className="card-body">
                           
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Prototype</li>
                                <li>Material Design</li>
                                <li>Adobe Suite</li>
                                <li>Figma</li>
                                <li>Framerjs</li>
                                <li>Adobe XD</li>
                                <li>Design System</li>
                                <li>Information Architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3 bg-primary text-light">
                            <h4 className="my-0 fw-normal">Front End</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>
                                <li>Responsive Design</li>
                                <li>Atomic Design</li>
                                <li>Reactjs</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Back End</h4>
                        </div>
                        <div className="card-body">
                           
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>REST API</li>
                                <li>Nodejs</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>MongoDB</li>
                                <li>PWA</li>          
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;