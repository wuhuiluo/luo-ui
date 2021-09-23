import { useState, useEffect } from "react";

function useDebounce(value: any, delay = 300) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = window.setTimeout(() => {
        
    })
  },[value,delay])
}
