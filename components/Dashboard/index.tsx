import Footer from "../Footer";
import Header from "../Header";
import { Container, Content, PageContainer } from "./styles";

type DashboardProps = {
    children: React.ReactNode,
};

export default function Dashboard({ children }: DashboardProps) {
    return (
        <Container>
            <Header />

            <Content>
                <PageContainer>{children}</PageContainer>
                <Footer />
            </Content>
        </Container>
    );
}