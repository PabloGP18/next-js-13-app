import Image from 'next/image'
// this is a react server component
// eslint-disable-next-line space-before-function-paren
export const fetchComments = async ({ id }) => {
  // making the page wait 3 seconds to load
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // showing an error message from the error file
  // throw Error('errorrrrr')

  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json())
}

export default async function ListOfPost({ params }) {
  const { id } = params
  const comments = await fetchComments({ id })

  return (
    <ul style={{ background: '#444', fontSize: '12px' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            width='50'
            height='50'
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}
          />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}
