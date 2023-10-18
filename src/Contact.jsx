import React, { useState } from "react";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
    const [formData, setFormData] = useState({ First: "", Last: "", Email: "", Address: "", City: "", State: "", Zip: "" })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { First, Last, Email, Address, City, State, Zip } = formData;
        if (!First) {
            toast.error("First name Required")
        }
        else if (!Email) {
            toast.error("email required")
        }
        else if (!Address) {
            toast.error("Address required")
        } 
        else if (!Zip) {
            toast.error("Zip required")
        }
        else if (!Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            toast.error("invalid email")
        }
        else if (State.match("choose")) {
            toast.error("invalid state")
        }
        else {
            console.log(formData);
            toast.success("Registration susscessful")
            setFormData({ First: "", Last: "", Email: "", Address: "", City: "", State: "", Zip: "" })

        }

    }

    return (
        <>
            <Navbar />
            <br></br>
            <h1 className="text-center display-6">Contact Form</h1>
            <br></br>
            <section className="container my-2 bg-dark w-50 text-white p-4 mb-5">
                <Toaster position='top-center' reverseOrder={false}/>
                <form onSubmit={handleSubmit} className="row g-3 p-5" id="form">
                    <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input onChange={handleInputChange} type="text" name="First" value={formData.First} className="form-control" id="validationCustom01"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input onChange={handleInputChange} type="text" name="Last" value={formData.Last} className="form-control" id="validationCustom02"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input onChange={handleInputChange} type="email" name="Email" value={formData.Email} className="form-control" id="inputEmail4" required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input onChange={handleInputChange} type="text" name="Address" value={formData.Address} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input onChange={handleInputChange} type="text" name="City" value={formData.City} className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select onChange={handleInputChange} id="inputState" name="State" value={formData.State} className="form-select">
                            <option defaultValue={true}>choose</option>
                            <option>Bagmati</option>
                            <option>Karnali</option>
                            <option>Madhesh</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input onChange={handleInputChange} type="text" name="Zip" value={formData.Zip} className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}
export default Contact;