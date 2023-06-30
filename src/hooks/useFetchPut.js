import { useEffect, useState } from "react";

export default function useFetchPut(url, newItem, id = 3) {

    const [itemChange, setItemChange] = useState({});

    useEffect(() => {
        const controller = new AbortController();
        const changeURL = url + "/" + id;
        console.log(changeURL);
        const putData = async () => {

            try {
                const resp = await fetch(changeURL, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(newItem)
                });

                if(resp.ok === false) {
                    console.log("Our Error");
                    throw new Error(resp.statusText);
                }

                const respData = await resp.json();
                setItemChange(respData);
            } catch (error) {
                console.log(error.message);
            }

        };

        putData();

        return controller.abort();
    }, []);

  return { itemChange };
}
