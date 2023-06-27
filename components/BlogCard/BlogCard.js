import styles from './blogCard.module.css'

const BlogCard = ({ title, likes, comments, blogImg, authorName, authorImg, readTime }) => {
  return (
    <article className={styles.blogCard}>
      <div className={styles.imgContainer}>
        <img src={blogImg} alt="blog-image" />
      </div>
      <div className={styles.blogContent}>
        <h3>{title}</h3>
        <div className={styles.authorInfo}>
          <div className={styles.authorImgContainer}>
            <img src={authorImg} alt="author-img" />
          </div>
          <h4>{authorName}</h4>
        </div>
        <div className={styles.blogMetrics}>
          <span>{readTime} mins read</span>
          <div className={styles.blogAnalytics}>
            <div className={styles.justifyAlignCenter}>
              <span className='ti-thumb-up'></span>
              <span>{likes}</span>
            </div>
            <div className={styles.justifyAlignCenter}>
              <span className='ti-comment-alt'></span>
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard