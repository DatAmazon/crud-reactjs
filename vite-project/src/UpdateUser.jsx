import React from "react";

function UpadteUser() {
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter email" className="form-control"></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder="Enter Age" className="form-control"></input>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}
export default UpadteUser;