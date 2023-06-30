import { useEffect } from "react";

export default function useTitle(title) {

    useEffect(() => {
        document.title = `
        ${title} | Shopping Cart
`;
        }, [title]);

  return null;
}
