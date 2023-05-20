import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Disney Doll - ${title} `;
  }, [title]);
};

export default useTitle;
