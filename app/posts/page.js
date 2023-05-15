import ListOfPosts from './ListOfPosts'
import { Suspense } from 'react'

export default async function PostsPage() {
  // with suspense you can do the same like with the loading file.
  return (
    <section>
      <Suspense fallback={<p>Loading posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
