import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftPanel from "../../shared/leftpanel/leftpanel";

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
  },
  {
    "id": 11,
    "date": "17/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 12,
    "date": "18/09/2022",
    "status": " 3 hours in javascript beginners and also working on sky store review comments.Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 13,
    "date": "19/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 14,
    "date": "20/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 15,
    "date": "21/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 16,
    "date": "22/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 17,
    "date": "23/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 18,
    "date": "24/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 19,
    "date": "25/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 20,
    "date": "26/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 21,
    "date": "27/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 22,
    "date": "28/09/2022",
    "status": " 3 hours in javascript beginners and also working on sky store review comments.Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 23,
    "date": "29/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 24,
    "date": "30/09/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 25,
    "date": "1/10/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 26,
    "date": "2/10/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 27,
    "date": "3/10/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 28,
    "date": "4/10/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 29,
    "date": "5/10/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  },
  {
    "id": 30,
    "date": "6/10/2022",
    "status": "I have compete the Introduction to JIRA and 3 hours in javascript beginners and also working on sky store review comments. Watched Advanced CSS tutorial for 5 hours. Attended Sync-up with competency head. Attended meeting and worked on flowchart regarding skill factory application. Collaborated with teammates and work on excelToPPT. Worked on SkyStore comments."
  }
]


type modelState = {
  showHide: boolean
  status: String
  rowsPerPage: Number,
  page: Number
}
export default class CandidateStatusHistory extends React.Component<{}, modelState> {

  state = {
    showHide: false,
    status: '',
    rowsPerPage: 10,
    page: 1
  }
  handleShowModal = () => {
    this.setState(prevState => ({ showHide: !prevState.showHide }))
  }
  handleChange = (event): void => {
    this.setState({ status: event.currentTarget.value })

  }

  render() {
    const { rowsPerPage, page } = this.state
    const endOffSet = Math.min(statusData.length, rowsPerPage * page)

    const tableData = statusData.slice((page - 1) * rowsPerPage, endOffSet)
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
                      {tableData &&
                        tableData.map(candidate => {
                          return (
                            <tr>
                              <td>{candidate.date}</td>
                              <td>{candidate.status}</td>
                              <td>
                                <button
                                  className="card-view-button"
                                  onClick={this.handleShowModal}
                                >
                                  Edit
                                </button>
                                <Modal
                                  show={this.state.showHide}
                                  onHide={this.handleShowModal}
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
                                          value={this.state.showHide == true ? this.state.status : candidate.status}
                                          onChange={this.handleChange}

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
                  <div className='pagination-button-group'>
                    <Button
                      size="sm"
                      style={{ marginLeft: '12px' }}
                      variant="outline-info"
                      disabled={page <= 1}
                      onClick={() => this.setState({ page: page - 1 })}
                    >
                      {`<`}
                    </Button>
                    {page}
                    <Button
                      size="sm"
                      variant="outline-info"
                      disabled={(page * rowsPerPage) >= statusData.length}
                      onClick={() => this.setState({ page: page + 1 })}
                    >
                      {`>`}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}
