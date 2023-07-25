import { useEffect, useState } from "react";
import { MENU_API } from "./Constants";

export const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  return resInfo;
};
