/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftPanel from "../../shared/leftpanel/leftpanel";
import PaginationComponent from './Pagination';

// import statusData from './statusData.json'
// import './CandidateStatusHistory.css'
const statusData = [
  {
    "id": 1,
    "date": "07/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 2,
    "date": "08/09/2022",
    "status": " 3 hours in javascript beginners and also working on sky store review comments.Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 3,
    "date": "09/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 4,
    "date": "10/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 5,
    "date": "11/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 6,
    "date": "12/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 7,
    "date": "13/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 8,
    "date": "14/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 9,
    "date": "15/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 10,
    "date": "16/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  }
]


interface modelState {
  showHide: boolean
  status: string

}
const CandidateStatusHistory: React.FC<modelState> = () => {

  const [hide, setHide] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [statusPerPage, setStatusPerPage] = React.useState<number>(5);
  const indexOfLastStatus: number = currentPage * statusPerPage;
  const indexOfFirstStatus: number = indexOfLastStatus - statusPerPage;
  const currentStatusOnPage: any = statusData.slice(
    indexOfFirstStatus,
    indexOfLastStatus
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container fluid={true}>
      <Row>
        <Col sm={3} bsPrefix="leftPanel col">
          <LeftPanel />
        </Col>
        <Col sm={9}>
          <div className="rightContainer">
            <div className="table-view">
              <div className="title-text">
                <h4>Johnny Status Update</h4>
              </div>
              <div className="table-container">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStatusOnPage &&
                      currentStatusOnPage.map(candidate => {
                        return (
                          <tr>
                            <td>{candidate.date}</td>
                            <td>{candidate.status}</td>
                            <td>
                              <button
                                className="card-view-button"
                                onClick={() => setHide(!hide)}
                              >
                                Edit
                              </button>
                              <Modal
                                show={hide}
                                onClick={() => setHide(!hide)}
                                backdrop="static"
                                size="lg"
                                centered
                                dialogClassName="modal-90w"
                                keyboard={false}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title>
                                    Edit Status - {candidate.date}
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <Form>
                                    <Form.Group
                                      className="mb-8"
                                      controlId="exampleForm.ControlTextarea1"
                                    >
                                      <Form.Control
                                        as="textarea"
                                        rows={8}
                                        value={hide === true ? status : candidate.status}
                                        onChange={(e) => setStatus(e.target.value)}
                                      />
                                    </Form.Group>
                                  </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button variant="primary">Update</Button>
                                </Modal.Footer>
                              </Modal>
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{
        float: "right",
        marginRight: "20px"
      }}>
        <PaginationComponent
          statusPerPage={statusPerPage}
          totalStatus={statusData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </Container >

  )
}

export default CandidateStatusHistory;
