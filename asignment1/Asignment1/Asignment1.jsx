import React from "react";
import "./Asignment1.css";

export default function Asignment1() {
  let studentObj = {
    sid: 1,
    sname: "Radha Krishna",
    course: "Clound Computing",
    age: 32,
    total: 564,
  };
  let doctorArray = [
    {
      dpctorId: 1,
      doctorName: "Aruna",
      designation: "Gynecologist",
      experience: "5 Years",
      contactNumber: 9823056293,
    },
    {
      dpctorId: 2,
      doctorName: "Vani",
      designation: "Oncologists",
      experience: "10 Years",
      contactNumber: 87934618395,
    },
    {
      dpctorId: 3,
      doctorName: "Swathi",
      designation: "Neurologists",
      experience: "23 Years",
      contactNumber: 7092345691,
    },
    {
      dpctorId: 4,
      doctorName: "Anupama",
      designation: "Psychiatrists",
      experience: "5 Years",
      contactNumber: 8123956357,
    },
    {
      dpctorId: 5,
      doctorName: "Rajesh",
      designation: "Radiologists",
      experience: "18 Years",
      contactNumber: 8702357491,
    },
    {
      dpctorId: 6,
      doctorName: "Kumar",
      designation: "Dermatologist",
      experience: "25 Years",
      contactNumber: 9147802538,
    },
    {
      dpctorId: 7,
      doctorName: "Jones",
      designation: "ENT specialist",
      experience: "12 Years",
      contactNumber: 8887543201,
    },
    {
      dpctorId: 8,
      doctorName: "Rahul",
      designation: "Cardiologists",
      experience: "8 Years",
      contactNumber: 8223309456,
    },
    {
      dpctorId: 9,
      doctorName: "Satish",
      designation: "Heart Surgeon",
      experience: "15 Years",
      contactNumber: 9991278930,
    },
    {
      dpctorId: 10,
      doctorName: "Sudarshan",
      designation: "Orthopedic surgeons",
      experience: "5 Years",
      contactNumber: 9870257910,
    },
    {
      dpctorId: 11,
      doctorName: "Poojitha",
      designation: "Dental",
      experience: "8 Years",
      contactNumber: 9998877542,
    },
  ];
  let doctorRes = doctorArray.map((doc) => {
    return (
      <tr>
        <td>{doc.dpctorId}</td>
        <td>{doc.doctorName}</td>
        <td>{doc.designation}</td>
        <td>{doc.experience}</td>
        <td>{doc.contactNumber}</td>
      </tr>
    );
  });
  return (
    <>
      {/* <fieldset>
        <legend>Student Details</legend> */}
      <table className="stnd_table" border="2" width="500">
        <th colSpan="2">Student Details</th>
        <tr>
          <td>Student Id</td>
          <td>{studentObj.sid}</td>
        </tr>
        <tr>
          <td>Student Name</td>
          <td>{studentObj.sname}</td>
        </tr>
        <tr>
          <td>Course</td>
          <td>{studentObj.course}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{studentObj.age}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{studentObj.total}</td>
        </tr>
      </table>
      {/* </fieldset> */}
      <hr />
      <fieldset style={{ width: "700px" }}>
        <legend>Doctor Details</legend>
        <table border="2" width="500">
          <tr>
            <th>Doctor Id</th>
            <th>Doctor Name</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Mobile Number</th>
          </tr>
          {doctorRes}
        </table>
      </fieldset>
    </>
  );
}
