import Counter from './Counter'

export default function layout({ children }) {
  // a layout file in next is very intresting to use for navigation, searches...
  // in a layout you can mantain a state
  /* in this case if we increment the counter in the post page,
 it will mantain this increment value also in the detail page of posts */
  // this way you don't need like a global stage to mantain the value of the state
  return (
    <>
      <Counter />
      <small>Home &bull; Posts</small>
      {children}
    </>
  )
}
