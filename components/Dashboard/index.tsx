import Footer from "../Footer";
import Header from "../Header";
import { Container, Content, PageContainer } from "./styles";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DashboardProps = {
    children: React.ReactNode,
};

export default function Dashboard({ children }: DashboardProps) {
    return (
        <>
            <ToastContainer />
            <Container>
                <Header />

                <Content>
                    <PageContainer>{children}</PageContainer>
                    <Footer />
                </Content>
            </Container>
        </>
    );
}