import profilePhoto from '../imgs/HaiDuong.jpeg'
function Home() {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-xl py-5">
                <img src={profilePhoto} className='img-thumbnail' alt="profile photo" style={{maxWidth:'200px',height:'auto'}}/>
                <h1 className="display-5 fw-bold">Hai Duong</h1>
                <h3 className="">
                    Full Stack Web Developer / Graphic Designer / Photographer
                </h3>
                <p className="col-md-8 fs-4">
                    I'm a passionate freelancer bringing you programming and
                    design from the future. I am experienced in developing web
                    and desktop applications including full front end design.
                    This includes brand identity, graphics and illustrations.
                </p>
            </div>
        </div>
    );
}

export default Home;
