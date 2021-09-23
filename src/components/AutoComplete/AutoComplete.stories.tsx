import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete } from "./AutoComplete";
import { render } from "@testing-library/react";

const SimpleComplete = () => {
  const lankers = [
    "bradley",
    "pope",
    "caruso",
    "cook",
    "cousins",
    "james",
    "AD",
    "green",
    "howard",
    "kuzma",
    "McGee",
    "rando",
  ];

  const handleFetch = (query: string) => {
    return lankers.filter((name) => name.includes(query));
  };

  const renderOption = (item: string) => {
    return <h2>name: {item}</h2>;
  };

  return (
    <AutoComplete
      onSelect={action("selected")}
      fetchSuggestions={handleFetch}
      renderOption={renderOption}
    />
  );
};

storiesOf("AutoComplete component", module).add("AutoComplete", SimpleComplete);
