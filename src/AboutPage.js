import { Modal, Card } from 'react-bootstrap';
import './AboutPage.css';

function AboutPage({show, hide}) {

  return (<Modal
            show={show}
            onHide={hide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                About
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Map data: © OpenStreetMap contributors <br />

                Map style: <a href="https://github.com/gravitystorm/openstreetmap-carto">OpenStreetMap Carto</a><br />

                Search is powered by <a href="https://nominatim.org/">Nominatim</a> <br />

                Map refresh period: 3 to 7 days <br />

              </p>
            </Modal.Body>
          </Modal>);
};

export default AboutPage;
