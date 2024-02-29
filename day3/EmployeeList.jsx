import React from "react";
import { useState } from "react";

export default function EmployeeList() {
  const data = [
    {
      empid: 1,
      empName: "Padma",
      designation: "Sprint Manage",
      salary: 180000,
      dept: "Deloitte UI",
    },
    {
      empid: 2,
      empName: "Chaitanya",
      designation: "Sr.Software Engineer",
      salary: 80000,
      dept: "BA",
    },
    {
      empid: 3,
      empName: "Ramya",
      designation: "Sr.Software Engineer",
      salary: 68000,
      dept: "UI/UX",
    },
    {
      empid: 4,
      empName: "Sowjanya",
      designation: "Manager",
      salary: 280000,
      dept: "Deloitte IT Solutions",
    },
    {
      empid: 5,
      empName: "Rahul",
      designation: "Trainee Software",
      salary: 30000,
      dept: "Deloitte Consulting",
    },
  ];
  const [EmpList, setEmpList] = useState(data);
  const [selectedEmp, setselectedEmp] = useState(null);
  const [empid, setEmpid] = useState("");
  const [empName, setEmpName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setsalary] = useState();
  const [dept, setDept] = useState();
  const [actionType, setActionType] = useState("");

  function editEmployee(empObj) {
    setActionType("Edit");
    setselectedEmp(empObj);
    setEmpid(empObj.empid);
    setEmpName(empObj.empName);
    setDesignation(empObj.designation);
    setsalary(empObj.salary);
    setDept(empObj.dept);
  }
  function deleteEmployee(empObj) {
    setselectedEmp(empObj);
    setActionType("Delete");
  }
 
  function confirmDelete() {
    let tempEmps = [...EmpList];
    let index = tempEmps.findIndex((x) => x.empid == selectedEmp.empid);
    if (index > -1) {
      tempEmps.splice(index, 1);
      setEmpList(tempEmps);
      setActionType(null);
    }
  }
  function resetForm() {
    setselectedEmp(null);
    setEmpid();
    setEmpName("");
    setDesignation("");
    setsalary();
    setDept("");
  }
  function addEmployee() {
    setActionType("Add");
    resetForm();
  }
  function submitEmployee() {
    console.log(empName, designation, salary, dept);
    let tempEmps = [...EmpList];
    if (actionType == "Add") {
      let obj = {
        empid: EmpList.length + 1,
        empName: empName,
        salary: salary,
        designation: designation,
        dept: dept,
      };
      tempEmps.push(obj);
    } else {
      let index = tempEmps.findIndex((x) => x.empid == selectedEmp.empid);
      if (index > -1) {
        tempEmps[index].empid = empid;
        tempEmps[index].empName = empName;
        tempEmps[index].salary = salary;
        tempEmps[index].designation = designation;
        tempEmps[index].dept = dept;
      }
    }
    setEmpList(tempEmps);
    setActionType(null);
  }

  const empArray = EmpList.map((x) => {
    return (
      <tr key={x.empid}>
        <td>{x.empid}</td>
        <td>{x.empName}</td>
        <td>{x.designation}</td>
        <td>{x.salary}</td>
        <td>{x.dept}</td>
        <td>
          <a
            title="edit"
            onClick={() => {
              editEmployee(x);
            }}
          >
            <i className="fa fa-edit"></i>
          </a>
          &nbsp;
          <a
            title="delete"
            onClick={() => {
              deleteEmployee(x);
            }}
          >
            <i className="fa fa-trash-o"></i>
          </a>
        </td>
      </tr>
    );
  });
  return (
    <>
      <h3>Employee List</h3>
      <button onClick={addEmployee}>Add Employee</button>
      <table className="table" border="2">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Designation</th>
            <th>Employee Salary</th>
            <th>Employee Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{empArray}</tbody>
      </table>
      {actionType && (
        <div className="modal show" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{actionType +' Employee'}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setActionType(null);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {actionType == "Edit" || actionType == "Add" ? (
                  <div>
                    <div className="mb-3 row">
                      <label className="col-4" htmlFor="empName">
                        Emplpyee Name: &nbsp;
                      </label>
                      <input
                        className="col-8 form-control w-50"
                        name="empName"
                        value={empName}
                        onChange={($event) => {
                          setEmpName($event.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3 row">
                      <label className="col-4" htmlFor="empDesig">
                        Designation: &nbsp;
                      </label>
                      <input
                        className="col-8 form-control w-50"
                        name="empDesig"
                        value={designation}
                        onChange={($event) => {
                          setDesignation($event.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3 row">
                      <label className="col-4" htmlFor="empSal">
                        Employee Salary: &nbsp;{" "}
                      </label>
                      <input
                        className="col-8 form-control w-50"
                        name="empSal"
                        value={salary}
                        onChange={($event) => {
                          setsalary($event.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3 row">
                      <label className="col-4" htmlFor="empDept">
                        Employee Department: &nbsp;{" "}
                      </label>
                      <input
                        className="col-8 form-control w-50"
                        name="empDept"
                        value={dept}
                        onChange={($event) => {
                          setDept($event.target.value);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  "Are you sure to Delete ?"
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setActionType(null);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={
                    actionType == "Edit" || actionType == "Add"
                      ? submitEmployee
                      : confirmDelete
                  }
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    
    </>
  );
}
