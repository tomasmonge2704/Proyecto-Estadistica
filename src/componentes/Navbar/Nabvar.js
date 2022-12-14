import { Navbar, Link, Text,Spacer } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
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
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
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
        >
            <Navbar.Item>
            <Switch
        checked={isDark}
        iconOff={<SunIcon filled />}
        iconOn={<MoonIcon filled />}
        size="xl"
        color="error"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
            </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item.nombre}
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