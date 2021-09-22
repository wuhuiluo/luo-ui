import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete } from "./AutoComplete";

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

  return (
    <AutoComplete
      onSelect={action("selected")}
      fetchSuggestions={handleFetch}
    />
  );
};

storiesOf("AutoComplete component", module).add("AutoComplete", SimpleComplete);
