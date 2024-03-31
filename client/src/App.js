import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Dashboard from "./components/finance/Finance";
import Login from "./components/LoginRegister/Login";
// import Register from "./components/LoginRegister/Register";
import TDashboard from "./components/transportDashboard/TDashboard";
import BMDashboard from "./components/buyerManager/BMDashboard";
import RPDashboard from "./components/researchDashboard/RPDashboard";
import DriverDashboard from "./components/driver/DriverDashboard";
import OrderManagerHomePage from "./components/orderManagement/OrderManagerHomePage";
import QualityList from "./components/orderManagement/body/QualityList/QualityList";
import ReqOrder from "./components/orderManagement/body/ReqOrders/ReqOrder";
import SMDashboard from "./components/supplierManagerDashboard/SMDashboard";
import SupplierDetails from "./components/supplierManagerDashboard/SupplierDetails";
import Coordinator from "./components/Coordinator/Coordinator";
import FruitType from "./components/Coordinator/FruitType";
import Category from "./components/Coordinator/Category";
import Salary from "./components/Coordinator/Salary";
import TransportFee from "./components/Coordinator/TransportFee";
import StaffManager from "./components/StaffManager/StaffManager";
import Employee from "./components/StaffManager/Employee";
import CalculateSalary from "./components/StaffManager/CalculateSalary";
import SalesPage from "./components/finance/SalesPage";
import VehicleDetails from "./components/transportDashboard/VehicleDetails";

import OPDashboard from "./components/orderProcessor/OPDashboard";
import AssignedOrder from "./components/orderProcessor/body/AssignedOrders/AssignedOrder"
import OngoingOrder from "./components/orderProcessor/body/OngoingOrders/OngoingOrder"
import CompletedOrder from "./components/orderProcessor/body/CompletedOrders/CompletedOrder"

import ExpensePage from "./components/finance/ExpensePage";
import ScheduleDetails from "./components/transportDashboard/ScheduleDetails";

import RequestedOrder from "./components/RequestedOrder/RequestedOrder";
import BuyerDashBoard from "./components/Buyer/BuyerDashBoard";
import NormalOrder from "./components/NormalOrder/NormalOrder";
import EditOrder from "./components/NormalOrder/EditOrder";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Website from "./Website/Website";
import OMDashboard from "./components/orderManagement/body/OMDashboard";

const router = createBrowserRouter([
  {
    path: "/freshroute",
    element: (
      <div>
        <Website />
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },

  // {
  //   path: "/register",
  //   element: (
  //     <div>
  //       <Register />
  //     </div>
  //   ),
  // },

  {
    path: "/",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },

  {
    path: "/tdashboard",
    element: (
      <div>
        <TDashboard />
      </div>
    ),
  },

  {
    path: "/BMDashboard",
    element: (
      <div>
        <BMDashboard />
      </div>
    ),
  },

  {
    path: "/RPDashboard",
    element: (
      <div>
        <RPDashboard />
      </div>
    ),
  },

  {
    path: "/DriverDashboard",
    element: (
      <div>
        <DriverDashboard />
      </div>
    ),
  },

  {
    path: "/OMDashboard",
    element: (
        <div>
          <OrderManagerHomePage />
        </div>
    ),
    children: [ {
        path: "/OMDashboard/",
        element: <OMDashboard/>,
      },
      {
        path: "/OMDashboard/QualityList",
        element: <QualityList/>,
      },
      {
        path: "/OMDashboard/ReqOrders",
        element: <ReqOrder/>,
      },

    ]
  },

  {
    path: "/OPDashboard",
    element: (
        <div>
          <OPDashboard />
        </div>
    ),
    children: [
      {
        path: "/OPDashboard/AssignedOrders",
        element: <AssignedOrder/>,
      },
      {
        path: "/OPDashboard/OngoingOrders",
        element: <OngoingOrder/>,
      },
      {
        path: "/OPDashboard/CompletedOrders",
        element: <CompletedOrder/>,
      },

    ]
  },


  {
    path: "/SMDashboard",
    element: (
      <div>
        <SMDashboard />
      </div>
    ),
  },

  {
    path: "/SupplierDetails",
    element: (
      <div>
        <SupplierDetails />
      </div>
    ),
  },

  {
    path: "/Coordinator",
    element: (
      <div>
        <Coordinator />
      </div>
    ),
  },

  {
    path: "/FruitType",
    element: (
      <div>
        <FruitType />
      </div>
    ),
  },

  {
    path: "/Category",
    element: (
      <div>
        <Category />
      </div>
    ),
  },

  {
    path: "/RequestedOrder",
    element: (
      <div>
        <RequestedOrder />
      </div>
    ),
  },

  {
    path: "/BuyerDashboard",
    element: (
      <div>
        <BuyerDashBoard />
      </div>
    ),
  },

  {
    path: "/NormalOrder",
    element: (
      <div>
        <NormalOrder />
      </div>
    ),
  },

  {
    path: "/EditOrder/:id",
    element: (
      <div>
        <EditOrder />
      </div>
    ),
  },

  {
    path: "/Salary",
    element: (
      <div>
        <Salary />
      </div>
    ),
  },

  {
    path: "/TransportFee",
    element: (
      <div>
        <TransportFee />
      </div>
    ),
  },

  {
    path: "/StaffManager",
    element: (
      <div>
        <StaffManager />
      </div>
    ),
  },

  {
    path: "/Employee",
    element: (
      <div>
        <Employee />
      </div>
    ),
  },

  {
    path: "/CalculateSalary",
    element: (
      <div>
        <CalculateSalary />
      </div>
    ),
  },

  {
    path: "/SalesPage",
    element: (
      <div>
        <SalesPage />
      </div>
    ),
  },

  {
    path: "/VehicleDetails",
    element: (
      <div>
        <VehicleDetails />
      </div>
    ),
  },

  {
    path: "/OPDashboard",
    element: (
      <div>
        <OPDashboard />
      </div>
    ),
  },
  {
    path: "/QualityList",
    element: (
      <div>
        <QualityList />
      </div>
    ),
  },
  {
    path: "/ExpensePage",
    element: (
      <div>
        <ExpensePage />
      </div>
    ),
  },

  {
    path: "/ScheduleDetails",
    element: (
      <div>
        <ScheduleDetails />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
