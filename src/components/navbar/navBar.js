import { Navbar, Link, Text,Spacer } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
export default function NavBar ({page}) {
    const collapseItems = [
        {nombre:"Home",href:"/"},
        {nombre:"Probabilidad",href:"/probabilidad"},
        {nombre:"Intervalos de Confianza",href:"/confianza"},
        {nombre:"Prueba de Hipotesis",href:"/hipotesis"},
        {nombre:"Correlacion y Regresion",href:"/correlacion"},

      ];
      const { setTheme } = useNextTheme();
      const { isDark, type } = useTheme();
    return(
        <Navbar isBordered variant="static">
        <Navbar.Toggle showIn="xs" id="navbar-toggle"/>
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
          id="navbar-content"
        >
       {collapseItems.map((item, index) => (
            <Navbar.Link href={item.href} key={index} isActive={page == item.href ? true : false }>{item.nombre}</Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
          id="navbar-content2"
        >
            <Navbar.Item>
            <Switch
        checked={isDark}
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
        size="xl"
        color="error"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        id="navbarSwich"
      />
            </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse id="navbar-collapse ">
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={index}
              activeColor="secondary"
              isActive={page == item.href ? true : false }
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.href}
              >
                {item.nombre}
              </Link>
            <Spacer y={2.5} />
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    )
}