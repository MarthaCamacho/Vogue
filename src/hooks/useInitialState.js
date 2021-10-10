import { useState, useEffect } from "react";

const useInitialState = (API) => {
    const [videos, setVideos] = useState(
        {
            "cards": [
                {
                    "id": 0,
                    "image": "",
                    "name": "",
                    "price": 0
                }
            ]
        }
    );
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return videos;
}

export default useInitialState;