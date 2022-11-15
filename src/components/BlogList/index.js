// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {details} = props
  return (
    <ul className="un-order-list-con">
      {details.map(each => (
        <BlogItem detail={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
