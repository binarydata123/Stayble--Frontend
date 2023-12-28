import React from "react";
import { Image } from "antd";
import styles from "./blogstyle.module.css"; // Update with the correct path
import ShowImage from "../ShowImage";
import Titles from "../Titles";
import ParaText from "../ParaText";
interface BlogCardProps {
  imageSrc: string;
  imageSize: number;
  alt: string;
  title: string;
  subtitle: string;
  subtitleSmall: string;
  authorImageSrc: string;
  authorName: string;
  date: string;
  shares: string;
  content: string;
  postLink: string;
}
const BlogCard = ({
  imageSrc,
  imageSize,
  alt,
  title,
  subtitle,
  subtitleSmall,
  authorImageSrc,
  authorName,
  date,
  shares,
  content,
  postLink,
}: BlogCardProps) => {
  return (
    <div className={styles.blogText}>
      <div className={styles.imageSection}>
        <ShowImage src={imageSrc} size={imageSize} alt={alt} />
        <div className={styles.imageSectionText}>{subtitleSmall}</div>
        <div className={`${styles.imageSectionText} ${styles.reverse}`}>
          {subtitle}
        </div>
        <Titles level={4} color="blockgray">
          {title}
        </Titles>
        <div className={styles.joannaWellick}>
          <div className="flex">
            <Image src={authorImageSrc} alt="" className={styles.marginNone} />
            <span className={styles.userName}>{authorName}</span>
          </div>
          <span className={styles.date}>{date}</span>
          <span className={styles.shares}>{shares} shares</span>
        </div>
        <ParaText size="small" color="darkgraydark">
          {content}
        </ParaText>
        <br />
        <a href={postLink}>View Post</a>
      </div>
    </div>
  );
};

export default BlogCard;
