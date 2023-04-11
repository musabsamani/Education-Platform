import React, { Component } from "react";
import Adminbar from "../adminbar";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Chart from "../dashboardComponent/chart";
import { handleOrder, handleOrderChange, handleAscending, handleSearch } from "../../helpers/helpersFunctions"
class RoomTable extends Component {
  state = {
    rooms: [],
  }
  constructor(props) {
    super(props)
    this.handleSearch = handleSearch.bind(this)
    this.handleOrder = handleOrder.bind(this)
    this.handleOrderChange = handleOrderChange.bind(this)
    this.handleAscending = handleAscending.bind(this)
  }
  componentDidMount() {
    this.setState({ rooms: this.props.rooms });
  }
  componentDidUpdate(prevProps) {
    if (this.props.rooms !== prevProps.rooms) {
      this.setState({ rooms: this.props.rooms });
    }
  }
  render() {
    return (
      <>
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Adminbar />
            <div className='content_area'>
              <div className="_topContent">
                <h1>Rooms</h1>
                <Link to="/addRoom">
                  <button className="btn btn-outline-primary m-3 " onClick={() => this.props.setTemporaryEmpty()}>
                    Add Room
                  </button>
                </Link>
              </div>
              <div className="propabilties">
                {/* for propabilties ##################
                ###########################
                 */}
              </div>
              <div className="table_section">
                <div className="tablebar">
                  <input className="searchbar" type="search" placeholder="Search..." onChange={e => this.handleSearch(e, "rooms", ["name"])} />
                  <div className="dropdownSelect">
                    <select className="form-select" aria-label="Default select example" onChange={e => this.handleOrderChange(e, "rooms")}>
                      <option label="Sort By" value="" />
                      <option label="Name" value="name" />
                    </select>
                    <select className="form-select" onChange={e => this.handleAscending(e, "rooms")} >
                      <option label="ascending" value="ascending" />
                      <option label="descending" value="descending" />
                    </select>
                  </div>
                </div>

                {/* ########### Table content section #############   */}

                <div className="tableContent">
                  <table className="table caption-top">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Room Name</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.rooms.length > 0 ? (
                        this.state.rooms.map((room, i) => (
                          <tr key={room._id}>
                            <td>{i + 1}</td>
                            <td>{room.name}</td>
                            <td>
                              <Link to={`/updateRoom?id=${room._id}`}>
                                <button className="btn btn-info btn-sm m-1" onClick={() => this.props.setTemporary(room)}>
                                  Update
                                </button>
                              </Link>

                              <button className="btn btn-danger btn-sm m-1" onClick={() => this.props.onDelete(room._id, "rooms")}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>Databse is Empty</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default RoomTable;