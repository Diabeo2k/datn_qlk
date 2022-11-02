import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import Settings from "../pages/Settings";
import Staff from "./../pages/Staff";
import Approve from "../pages/Approve";
import Require from "../pages/Require";
import Report from "../pages/Report";
import CheckIpEp from "../pages/CheckIpEp";
import CheckInventory from "../pages/CheckInventory";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateRequire from "../pages/CreateRequire";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/approve" element={<Approve />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/require/:id" element={<Require />} />
      <Route path="/report" element={<Report />} />
      <Route path="/check-inventory" element={<CheckInventory />} />
      <Route path="/check-import-export" element={<CheckIpEp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-require" element={<CreateRequire />} />
    </Routes>
  );
};

export default Router;
