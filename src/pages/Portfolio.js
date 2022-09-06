import pfolioData from "../data/portfolio.json";
import { Github } from "react-bootstrap-icons";
function Portfolio() {
    return (
        <div className="container-xl">
            <h1>Portfolio</h1>
            <div className="row">
                {pfolioData.map((pf) => {
                    return (
                        <div className="col-md-6 col-lg-4" key={pf.title}>
                            <div className="card h100">
                                <img
                                    src={pf.imageURL}
                                    alt={pf.title}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">
                                            <a href={pf.github} target="_blank">
                                                <Github
                                                    color="royalblue"
                                                    size={40}
                                                />
                                            </a>
                                        </div>
                                        <div className="col-9">
                                            <h4 className="card-title">
                                                {pf.title}
                                            </h4>
                                            <p className="card-text">
                                                {pf.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Portfolio;
