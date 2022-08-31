import React from "react";
import { Button } from "antd";

import { useLocalization } from "@handlers/useLocalization";

import "./Header.css";

function Header() {
  const { otherLang, changeLanguage } = useLocalization();

  return (
    <header>
      <Button onClick={() => changeLanguage(otherLang)}>
        {otherLang.toUpperCase()}
      </Button>
    </header>
  );
}

export default Header;
