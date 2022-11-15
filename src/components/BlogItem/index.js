// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {detail} = props
  const {title, description, publishedDate} = detail
  return (
    <li className="item-card">
      <div className="con-paras">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
