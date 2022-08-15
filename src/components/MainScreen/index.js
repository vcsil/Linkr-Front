import Header from "../Header";
import { MainScreenContainer, Section } from "./style";

export default function MainScreen({ children }) {
  return (
    <MainScreenContainer>
      <Header />
      <main>
        <Section>{children}</Section>
      </main>
    </MainScreenContainer>
  );
}
    