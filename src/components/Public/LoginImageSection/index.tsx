import React from "react";
import ShowImage from "@/commonUl/ShowImage";
import { Image } from "antd";

interface LoginImageSectionProps {
  imagePath: string;
  imageAlt: string;
}

const LoginImageSection: React.FC<LoginImageSectionProps> = ({
  imagePath,
  imageAlt,
}) => {
  return (
    <div className="loginImage">
      <div className="imageText">
        <ShowImage src={imagePath} alt={imageAlt} size={100} />
        <div className="textData">
          <Image src="/images/chat.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginImageSection;
