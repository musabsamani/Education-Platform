import { useEffect, useState } from "react";

// React component to display an image by ID
function ImageById(props) {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Fetch the URL of the image by ID
        fetch(`http://localhost:5000/api/profile/${props.imageId}`)
            .then(res => {
                res.json()
                console.log(res)
            }
            )
            .then(data => {
                setImageUrl(data.url); console.log(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [props.imageId]);

    if (!imageUrl) {
        return <p>Loading image...</p>;
    }

    return <img src={imageUrl} alt="Uploaded image" />;
}
export default ImageById