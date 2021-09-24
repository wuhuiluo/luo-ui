import React, {
  FC,
  useState,
  ChangeEvent,
  ReactElement,
  useEffect,
  KeyboardEvent,
  useRef,
} from "react";
import className from "classnames";
import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [highLightIndex, sethighLightIndex] = useState(-1);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debounceValue = useDebounce(inputValue, 500);
  useClickOutside(componentRef, () => setSuggestions([]));
  useEffect(() => {
    if (debounceValue && triggerSearch) {
      const results = fetchSuggestions(debounceValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(results);
      }
    } else {
      setSuggestions([]);
    }
    sethighLightIndex(-1);
  }, [debounceValue]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setSuggestions([]);
    onSelect && onSelect(item);
    triggerSearch.current = false;
  };
  const highlight = (index: number) => {
    if (index <= 0) {
      index = 0;
    }
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    sethighLightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      // 回车
      case 13:
        if (suggestions[highLightIndex]) {
          handleSelect(suggestions[highLightIndex]);
        }
        break;
      // 向上箭头
      case 38:
        highlight(highLightIndex - 1);
        break;
      // 向下箭头
      case 40:
        highlight(highLightIndex + 1);
        break;
      // esc
      case 27:
        setSuggestions([]);
        break;
    }
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const classes = className("in-suggstions-item", {
            "lin-suggstions-active": index === highLightIndex,
          });
          return (
            <li
              className={classes}
              onClick={() => handleSelect(item)}
              key={index}
            >
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="luo-autu-complete" ref={componentRef}>
      <Input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
        {...restProps}
      />
      {loading && (
        <ul>
          <Icon icon="spinner" spin />
        </ul>
      )}
      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};
