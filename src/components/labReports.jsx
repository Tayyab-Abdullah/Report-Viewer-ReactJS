import React, { Component } from "react";
import userimage from "../images/user--image--square.jpg";
import userInfo from "./userData";
import reportsInfo from "./reportsData";

class LabReports extends Component {

  render() {
    return (
      <section className="container labinfo">
        <div className="info--section">
          <img className="info--userimage" src={userimage} alt="user--logo" />
          <h1 className="info--username title">{userInfo.name}</h1>
          <p className="info--usertype subtitle">{userInfo.type}</p>
          <div className="info--enrollment">
            <div className="info--enrolled">
              <h1>Time Enrolled:</h1>
              <p>{userInfo.timeEnrolled}</p>
            </div>
            <div className="info--admitroom">
              <h1>OPD Room:</h1>
              <p>{userInfo.opdRoom}</p>
            </div>
            <div className="info--doctorinfo">
              <h1>Discounted By:</h1>
              <p>{userInfo.discountedBy}</p>
            </div>
          </div>
        </div>
        <div className="report--section">
          <h1 className="report--title">Lab Report</h1>

          <div>
            <p className="report--type">
              Report Type:
              <select className="report--selection readings" name="" id="">
                <option>{reportsInfo.title}</option>
              </select>
            </p>
          </div>
          <table>
            <caption className="report--tableCaption">Blood Counts</caption>
            <TableRow
              title="TLC:"
              value1={reportsInfo.tlcValue}
              value2="x 10^9/L"
              value3="4.0 - 11.0"
            />
            <TableRow
              title="RBC:"
              value1={reportsInfo.rbcValue}
              value2="x 10^12/L"
              value3="4.50 - 6.30"
            />
            <TableRow
              title="Haemoglobin:"
              value1={reportsInfo.haemoglobinValue}
              value2="g/dL"
              value3="13.0 - 16.5"
            />
            <TableRow
              title="PCV:"
              value1={reportsInfo.pcvValue}
              value2="I/L"
              value3="0.37 - 0.47"
            />
            <TableRow
              title="MCV:"
              value1={reportsInfo.mcvValue}
              value2="fL"
              value3="76.0 - 96.0"
            />
            <TableRow
              title="MCH:"
              value1={reportsInfo.mchValue}
              value2="pg"
              value3="27.0 - 32.0"
            />
            <TableRow
              title="MCHC:"
              value1={reportsInfo.mchcValue}
              value2="g/dL"
              value3="32.0 - 36.0"
            />
            <TableRow
              title="Platelet Count:"
              value1={reportsInfo.plateletValue}
              value2="x 10^9/L"
              value3="150 - 400"
            />
          </table>
          <div className="report--buttons">
            <button className="button button--backHome">Back Home</button>
            <button className="button button--done">Done</button>
          </div>
        </div>
      </section>
    );
  }
}

const TableRow = (props) => {
  return (
    <tr className="report--rows">
      <th>{props.title}</th>
      <td className="report--readings">
        <input
          className="readings report--firstReading"
          type="text"
          value={props.value1}
          readOnly
          disabled
        />
        <div>
        <input
          className="report--readingUnit"
          type="text"
          value={props.value2}
          readOnly
          disabled />
        <input
          className="report--readingCriteria"
          type="text"
          value={props.value3}
          readOnly
          disabled
        />
        </div>
      </td>
    </tr>
  );
};

export default LabReports;
