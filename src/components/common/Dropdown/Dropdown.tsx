import React from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

import "./Dropdown.css";

const { Option } = Select;

interface IProps {
  title: string;
  data: string[];
  value: string | null;
  onSelect: (value: string) => void;
  showAll?: boolean;
}

function Dropdown({ title, data, value, onSelect, showAll = false }: IProps) {
  const { t } = useTranslation();
  return (
    <div className="dropdown">
      <label className="dropdown__label">{title}</label>
      <Select
        value={value}
        onChange={onSelect}
        dropdownMatchSelectWidth
        className={"dropdown__select"}
        placeholder={title}
      >
        {showAll && <Option value={"ALL"}>{t("showAll")}</Option>}
        {data.map((o: string) => (
          <Option key={o} value={o}>
            {o}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default Dropdown;
