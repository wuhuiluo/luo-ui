import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete, DataSourceType } from "./AutoComplete";

interface LankerPlayerProps {
  value: string;
  number?: number;
}

interface GithubUserProps {
  value: string;
  login?: string;
  url?: string;
}

const AsyncComplete = () => {
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({
          value: item.login,
          ...item,
        }));
      });
  };

  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    console.log(item);
    return (
      <>
        <h2>name: {item.login}</h2>
        <p>github地址: {item.url}</p>
      </>
    );
  };

  return (
    <AutoComplete
      renderOption={renderOption}
      fetchSuggestions={handleFetch}
      onSelect={action("select")}
    />
  );
};

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
  // const lankersWithNumber = [
  //   { value: "bradey", number: 11 },
  //   { value: "james", number: 23 },
  //   { value: "pope", number: 4 },
  //   { value: "caruso", number: 7 },
  //   { value: "green", number: 14 },
  //   { value: "haward", number: 0 },
  //   { value: "kuzma", number: 39 },
  // ];
  const handleFetch = (query: string) => {
    return lankers
      .filter((name) => name.includes(query))
      .map((item) => ({ value: item }));
  };

  // const handleFetch = (query: string) => {
  //   return lankersWithNumber.filter((player) => player.value.includes(query));
  // };

  const renderOption = (item: DataSourceType<LankerPlayerProps>) => {
    return (
      <>
        <h2>name: {item.value}</h2>
        <p>number: {item.number}</p>
      </>
    );
  };

  return (
    <AutoComplete
      onSelect={action("selected")}
      fetchSuggestions={handleFetch}
      // renderOption={renderOption}
    />
  );
};

storiesOf("AutoComplete component", module)
  .add("AutoComplete", SimpleComplete)
  .add("异步请求", AsyncComplete);
