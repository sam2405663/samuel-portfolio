import { useEffect, useState } from "react";
import axios from "axios";

export default function useGithub() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/sam2405663")
      .then((res) => setData(res.data));
  }, []);

  return data;
}