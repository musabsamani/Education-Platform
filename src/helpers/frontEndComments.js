// we should know how to handle time data
// add time field in add lesson page

// ! ############################
// ! ############################
// ! All Above Done !!!!
// ! this red color is so annoying >_<
// ! ############################
// ! ############################
//? this from 24/3/2023 11:30
//? go to dashboard component line 95 and make it un_hash
//? go to chart component line 17 and the function un_hash
//? the proplem that i face it is i can't to pass the volunteer information from the db to this chart to show the no. voluneers signup in specific month

//? hint there are some components are empty i make it for some perposes ,,, 

// ! Dont touch this code


// <div className="table_section">
//                 <div className="tablebar">
//                   <input className="searchbar" type="search" placeholder="Search..." />
//                   <div className="dropdownSelect">
//                     <select className="form-select" aria-label="Default select example">
//                       <option selected>Sort By</option>
//                       <option value="1">Name</option>
//                       <option value="2">Date</option>
//                       <option value="3">Approved</option>
//                     </select>
//                   </div>
//                 </div>

                {/* ########### Table content section #############   */}

                // <div className="tableContent">
                //   <table className="table caption-top">
                //     <thead>
                //       <tr>
                //         <th scope="col">#</th>
                //         <th scope="col">subject</th>
                //         <th scope="col">lesson</th>
                //         <th scope="col">lesson Content</th>
                //         <th scope="col">room</th>
                //         <th scope="col">volunteer</th>
                //         <th scope="col">start</th>
                //         <th scope="col">end</th>
                //         <th scope="col">Action</th>
                //       </tr>
                //     </thead>
                //     <tbody>
                //       {this.props.sessions.length > 0 ? (
                //         this.props.sessions.map((session, i) => (
                //           <tr key={session._id}>
                //             <td>{i + 1}</td>
                //             <td>{session.subject && session.subject.code}</td>
                            {/* <td>{session.lesson.subject && session.lesson.subject.code}</td> */}
            //                 <td>{session.lesson && session.lesson.name}</td>
            //                 <td>{session.lesson && <PopupComponent lesson={session.lesson} />}</td>
            //                 <td>{session.room && session.room.name}</td>
            //                 <td>{session.volunteer && session.volunteer.name}</td>
            //                 <td>{session.start}</td>
            //                 <td>{session.end}</td>
            //                 <td>
            //                   <Link to={`/updateSession?id=${session._id}`}>
            //                     <button className="btn btn-info btn-sm" onClick={() => this.props.setTemporary(session)}>
            //                       Update
            //                     </button>
            //                   </Link>
            //                   <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(session._id, "sessions")}>
            //                     Delete
            //                   </button>
            //                 </td>
            //               </tr>
            //             ))
            //           ) : (
            //             <tr>
            //               <td>Databse is Empty</td>
            //             </tr>
            //           )}
            //         </tbody>
            //       </table>
            //     </div>
            //   </div>