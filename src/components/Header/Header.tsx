import React from "react";
import { Button, Space } from "antd";

import { useLocalization } from "@handlers/useLocalization";

import "./Header.css";
import { useTheming } from "@handlers/useTheming";

function Header() {
  const { otherLang, changeLanguage } = useLocalization();
  const { otherTheme, changeTheme } = useTheming();

  return (
    <header>
      <Space>
        <Button onClick={() => changeLanguage(otherLang)}>
          {otherLang.toUpperCase()}
        </Button>
        <Button onClick={() => changeTheme(otherTheme)}>
          {otherTheme.toUpperCase()}
        </Button>
      </Space>
    </header>
  );
}

export default Header;
