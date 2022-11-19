import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { AuthProvider, RequireAuth, RequireNotAuth } from "./auth";
import { RouteProvider } from "./route";
import { Layout } from "./components/layout";
import { Login, TodoLists, Calendar, Contacts, News, Sample } from "./components/pages";
import { PageNotFoundPage } from "./components/pages/PageNotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <RouteProvider>
          <AuthProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  element={
                    <RequireNotAuth>
                      <Outlet />
                    </RequireNotAuth>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/sample" element={<Sample />} />
                 </Route>
                {ProtectedRoutes}
              </Route>
            </Routes>
          </AuthProvider>
        </RouteProvider>
      </BrowserRouter>
    </>
  );
}

const ProtectedRoutes = (
  <Route
    path="/"
    element={
      <RequireAuth>
        <Outlet />
      </RequireAuth>
    }
  >
    <Route index element={<Navigate to="/todos" />} />
    <Route path="/todos" element={<TodoLists />} />
    <Route path="/todos/:listName" element={<TodoLists />} />
    <Route path="/calendar" element={<Calendar />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/news" element={<News />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </Route>
);
