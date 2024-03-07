import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

import { Flex } from "../../style";
import * as C from "./style";

export function NavBar({ themeToggler, theme }) {
  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler} >
          {theme === 'light' ? <BiMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>
    </C.Container>
  );
}
