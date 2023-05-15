import Link from 'next/link'
import LikeButton from './LikeButton'

// this is a react server component
// {cache: 'no-store'} when building the application, this will not make it a static page
// website that are often adding new content need this feature :)
// next: {revalidate: 60} => this will fetch data every 60 seconds
export const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  }).then((res) => res.json())
}

// you use the slice method if you only want to show a couple of posts (5 in the example)
export default async function ListOfPosts() {
  const posts = await fetchPost()

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 style={{ color: '#09f' }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      ))}
    </>
  )
}
