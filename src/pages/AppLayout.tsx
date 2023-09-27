import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Container, SCMainWrapper, Wrapper } from "../theme/globalStyle";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { sidebarData } from "../components/Sidebar/Sidebar.data";

export const AppLayout = () => {
  return (
    <>
      <SCMainWrapper>
        <Sidebar links={sidebarData} />
        <Container>
          <Header />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Container>
      </SCMainWrapper>
      <Footer />
    </>
  );
};
