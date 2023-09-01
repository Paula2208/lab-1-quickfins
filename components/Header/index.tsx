import Link from "next/link";
import { HeaderContainer, ItemTitle, TitleContainer, WrapperItems } from "./styled";
import { useRouter } from "next/router";
import RouteTitles from "../../interfaces/Routing";

export default function Header() {

  const router = useRouter();

  const titles: RouteTitles[] = [
    {
      label: 'Municipios',
      route: '/states'
    },
    {
      label: 'Personas',
      route: '/people'
    },
    {
      label: 'Viviendas',
      route: '/living'
    }]

  return (
    <HeaderContainer>
      <Link href="/">
        <TitleContainer>Laboratorio 1</TitleContainer>
      </Link>

      <WrapperItems>
        {titles.map((t) => (
          <Link href={t.route} key={t.label}>
            <ItemTitle key={t.label} isActive={router.pathname === t.route}>
              {t.label}
            </ItemTitle>
          </Link>
        ))}
      </WrapperItems>

    </HeaderContainer>
  );
}