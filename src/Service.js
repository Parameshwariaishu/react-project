import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


class Service extends React.Component {
    render() {
        return (
            <>
 
                <div id="service">
                    <h1>Service</h1>
                    <div className="serdiv">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://wallpapercave.com/wp/nsu3cSp.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="success">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/* card 2 */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://wallpapercave.com/wp/zX0nedR.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/* card3 */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://th.bing.com/th/id/R.7392076afae76e7b509eaa56828ad3a3?rik=bMOB2jh%2brKQTRA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f7DsFs1j.jpg&ehk=dIlh%2fLO3mHKnyyj7tfdoExjhmaV9XP4bbOdmrMGLems%3d&risl=&pid=ImgRaw&r=0" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="danger">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}
export default Service;