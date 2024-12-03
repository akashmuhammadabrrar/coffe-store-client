import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const [users, setUsers] = useState(loadedUsers);
  //   delete user
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from the database
        fetch(`https://coffee-store-server-five-black.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //   remove the user from ui
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">
        Total Users: {users.length}{" "}
        <Link className="btn" to="/">
          {" "}
          Back{" "}
        </Link>
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>1</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date & Time</th>
              <th>Last SignIn</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <div className="flex sm:flex-col lg:flex-row md:flex-row justify-center items-center gap-2">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-error btn-sm">
                      X
                    </button>
                    <button className="btn btn-ghost btn-sm">update</button>
                    <button className="btn btn-info btn-sm">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
