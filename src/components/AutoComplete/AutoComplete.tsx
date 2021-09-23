import React, { FC, useState, ChangeEvent, ReactElement } from "react";
import Input, { InputProps } from "../Input/input";

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (str: string) => string[];
  onSelect?: (item: string) => void;
  renderOption?: (item: string) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(value);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  console.log(suggestions);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    if (value) {
      const results = fetchSuggestions(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (item: string) => {
    setInputValue(item);
    setSuggestions([]);
    onSelect && onSelect(item);
  };
  const renderTemplate = (item: string) => {
    return renderOption ? renderOption(item) : item;
  };
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li onClick={() => handleSelect(item)} key={index}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="luo-autu-complete">
      <Input onChange={handleChange} value={inputValue} {...restProps} />
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};
