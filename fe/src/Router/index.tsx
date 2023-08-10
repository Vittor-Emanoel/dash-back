import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SignIn } from "../view/pages/SignIn";
import { Dashboard } from "../view/pages/Dashboad";
import { MembersList } from "../view/pages/Members";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<MembersList />} />
      </Routes>
    </BrowserRouter>
  );
}
