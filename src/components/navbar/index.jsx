import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

import LogoInstagram from "../../assets/logo-instagram.svg";

import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";

export function NavBar({ themeToggler, theme }) {
  function GroupText({ title, subtitle }) {
    return (
      <Flex gap="4px">
        <Typography>{title}</Typography>
        <Typography weight="388" size="12px" height="14px">
          {subtitle}
        </Typography>
      </Flex>
    );
  }
  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === "light" ? <BiMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>
      <img src={LogoInstagram} alt="logo instagram" />

      <Flex>
        <C.Profile>
          <img
            src="https://avatars.githubusercontent.com/u/157861366?v=4"
            alt="imagemperfil github"
          />
        </C.Profile>

        <GroupText title="Rodrigo Robl" subtitle="@rodrigorobl" />
      </Flex>

      <Spacer margin="8px" />

      <Flex direction="row" justify="spece-between">
        <GroupText title="179" subtitle="Publicações" />
        <GroupText title="21k" subtitle="Seguidores" />
        <GroupText title="2k" subtitle="Seguindo" />
      </Flex>
    </C.Container>
  );
}
