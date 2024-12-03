import React from "react";
import Swal from "sweetalert2";
import Header from "./Header";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server(create)
    fetch("https://coffee-store-server-five-black.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="lg:w-3/4 mx-auto mt-16">
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold italic text-[#331A15]">
            Add Coffee!
          </h1>
          <p className="py-6">
            Make Your Day Charming With The Delicious Coffee.Whether sipped
            slowly in the morning to start the day or shared with friends during
            a lively gathering, coffee continues to be a symbol of comfort,
            creativity, and connection for millions around the world.
          </p>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleAddCoffee} className="card-body">
            {/* form first row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="coffee name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="chef name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form second row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="coffee supplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="taste name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form third row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="coffee Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Coffee Details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* fourth row form */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-ghost bg-[#D2B48C]">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
