import React, { useState } from "react";
import DoctorCrud from "./doctorCrud";
export default function Doctors() {
  let doctorArray = [
    {
      dpctorId: 1,
      doctorName: "Aruna",
      designation: "Gynecologist",
      experience: "5 Years",
      contactNumber: 9823056293,
      rating: 4.5,
      img: "images/doc1.jpg",
    },
    {
      dpctorId: 2,
      doctorName: "Vani",
      designation: "Oncologists",
      experience: "10 Years",
      contactNumber: 87934618395,
      rating: 3,
      img: "images/doc2.jpg",
    },
    {
      dpctorId: 3,
      doctorName: "Kumar",
      designation: "Neurologists",
      experience: "23 Years",
      contactNumber: 7092345691,
      rating: 3.5,
      img: "images/doc3.png",
    },
    {
      dpctorId: 4,
      doctorName: "Anupama",
      designation: "Psychiatrists",
      experience: "5 Years",
      contactNumber: 8123956357,
      rating: 3,
      img: "images/doc4.png",
    },
    {
      dpctorId: 5,
      doctorName: "Rajesh",
      designation: "Radiologists",
      experience: "18 Years",
      contactNumber: 8702357491,
      rating: 5,
      img: "images/doc5.jpg",
    },
    {
      dpctorId: 6,
      doctorName: "Swathi ",
      designation: "Dermatologist",
      experience: "25 Years",
      contactNumber: 9147802538,
      rating: 5,
      img: "images/doc6.jpg",
    },
    {
      dpctorId: 7,
      doctorName: "Jones",
      designation: "ENT specialist",
      experience: "12 Years",
      contactNumber: 8887543201,
      rating: 4,
      img: "images/doc7.jpg",
    },
    {
      dpctorId: 8,
      doctorName: "Rahul",
      designation: "Cardiologists",
      experience: "8 Years",
      contactNumber: 8223309456,
      rating: 4.5,
      img: "images/doc8.jpg",
    },
    {
      dpctorId: 9,
      doctorName: "Poojitha ",
      designation: "Heart Surgeon",
      experience: "15 Years",
      contactNumber: 9991278930,
      rating: 4.5,
      img: "images/doc9.jpg",
    },
    {
      dpctorId: 10,
      doctorName: "Sudarshan",
      designation: "Orthopedic surgeons",
      experience: "5 Years",
      contactNumber: 9870257910,
      rating: 4,
      img: "images/doc10.jpg",
    },
    {
      dpctorId: 11,
      doctorName: "Satish",
      designation: "Dental",
      experience: "8 Years",
      contactNumber: 9998877542,
      rating: 5,
      img: "images/doc11.jpg",
    },
  ];
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  function ratingRes(rating) {
    return [1, 2, 3, 4, 5].map((x) => {
      return (
        <i
          key={x}
          className={
            rating >= x
              ? "fa fa-star checked"
              : rating < x && rating > x - 1
              ? "fa fa-star-half-o checked"
              : "fa fa-star-o"
          }
        ></i>
      );
    });
  }

  let doctorRes =doctorArray.map((doc, index) => {
    return (
      <div key={doc.dpctorId} className="col">
        <div className="card text-center">
         
          <div className="mt-2 text-center">
            <img
              src={doc.img}
              className="avatar  w-25 rounded-circle"
              alt={doc.doctorName}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{doc.doctorName}</h5>
            <small>{doc.designation}</small>
            <p className="card-text">{ratingRes(doc.rating)}</p>
          </div>
          <div className="card-footer">
            {/* <p className="card-text"> */}
            <input
              type="button"
              className="btn btn-secondary"
              value="Book an Appointment"
            />
            {/* </p> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {/* <fieldset style={{ width: "700px" }}>
        <legend>Doctor Details</legend>
        <table className="table table-bordered" border="2" width="500">
          <thead>
            <tr>
              <th>Doctor Id</th>
              <th>Doctor Name</th>
              <th>Designation</th>
              <th>Experience</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>{doctorRes}</tbody>
        </table>
      </fieldset> */}
      <h3>Doctors List</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4">{doctorRes}</div>
      {selectedDoctor && <DoctorCrud doctObj={selectedDoctor}/>}
    </>
  );
}
