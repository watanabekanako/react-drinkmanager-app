import { Route, Routes } from "react-router-dom";

import { AdminRouter } from "./AdminRouter";
import { UserRouter } from "./UserRouter";

import { MainMock } from "../component/pages/MainMock";
import Login from "../component/pages/Login";
import AdminLogin from "../component/pages/AdminLogin";
import AdminHome from "../component/pages/AdminHome";
import Register from "../component/pages/Register";
import Top from "../component/pages/Top";
import DefaultLayout from "../component/layout/defaultLayout";
// ヘッダー不必要のため仮置
import Faq from "../component/pages/Faq";

const MainRoute = [
  {
    path: "/main",
    element: <MainMock />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/adminhome",
    element: <AdminHome />,
  },
  {
    path: "/home",
    element: <Top />,
  },
  // ヘッダー不必要のため仮置
  {
    path: "/faq",
    element: <Faq />,
  },
];

export const MainRouter = () => {
  return (
    <>
      <Routes>
        {MainRoute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        {/* adminhome配下のルーティング */}
        {AdminRouter.map((route, index) => (
          <Route
            key={index}
            path={`/adminhome${route.path}`}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
        {/* home配下のルーティング */}
        {UserRouter.map((route, index) => (
          <Route
            key={index}
            path={`/home${route.path}`}
            element={<DefaultLayout>{route.element}</DefaultLayout>}
          />
        ))}
      </Routes>
    </>
  );
};
