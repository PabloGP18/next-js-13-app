import Link from 'next/link'

// this is a react server component
const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  )
}

// you use the slice method if you only want to show a couple of posts (5 in the example)
export default async function ListOfPost({ params, children }) {
  const { id } = params
  const post = await fetchPost(id)

  return (
    <>
      <article key={post.id}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${id}/comments`}>Check comments</Link>
        {children}
      </article>
    </>
  )
}
