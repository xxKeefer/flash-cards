import { Header, Footer, ThemeWrapper } from "./components";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <ThemeWrapper>
      <Header />
      <Home />
      <Footer />
    </ThemeWrapper>
  );
}
