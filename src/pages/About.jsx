import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h1>
                    Don't squeeze in a sedan when you could relax in
                </h1>
                <p>Our mission is to enliven your road trip wth the vans are recertified
                    before each trip to ensure your trip without a hitch. (Hitch costs extra 😄)
                </p>
                <p>
                    our team is full of vanlife enthusiasts who know fith the world on 4 wheel.
                </p>

            </div>
            <div className="about-page-cta">
                <h2>Yur destination is waiting.<br/>Your van is ready</h2>
                <Link className="link-button" to='/vans'>EXplore our vans</Link>
            </div>
        </div>
    )
}

export default About