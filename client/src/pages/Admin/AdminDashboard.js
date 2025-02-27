import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
          <div className="border border-dark w-100 p-3 ">
              <h3>
                <span className="fw-bold m-3" style={{ fontSize: "2 rem" }}>
                  Username: 
                </span>
                {auth?.user?.name}
              </h3>

              <h3>
                <span className="fw-bold m-3" style={{ fontSize: "2 rem" }}>
                  Email:
                </span>
                {auth?.user?.email}
              </h3>

              <h3>
                <span className="fw-bold m-3" style={{ fontSize: "2 rem" }}>
                  Address:
                </span>
                {auth?.user?.address}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
