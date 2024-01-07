import React from "react";

interface IconImageProps {
  imageUrl: string;
  name: string;
}

const IconImage: React.FC<IconImageProps> = ({ imageUrl, name }) => {
    return (
      <div>
        <img className='icon' src={imageUrl} alt=''/>
        <p>{name}</p>
      </div>
    );
  };

export default IconImage;