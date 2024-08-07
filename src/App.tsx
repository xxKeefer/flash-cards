import { Routes, Route } from "react-router-dom";
import { Header, Footer, ThemeWrapper, Drawer } from "./components";
import { Home, TwoCards } from "./pages";
import { useState } from "react";

export default function App() {
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);
  return (
    <ThemeWrapper>
      <Header openDrawer={setMainDrawerOpen} />
      <Drawer open={mainDrawerOpen} setOpen={setMainDrawerOpen}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="two-cards" element={<TwoCards />} />
        </Routes>
      </Drawer>
      <Footer />
    </ThemeWrapper>
  );
}
