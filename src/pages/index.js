import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

const posts = [
  {title: 'Testing', excerpt: 'This is a test.'},
  {title: 'Testing 01', excerpt: 'This is another test.'}
]

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS blog</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-8 col-span-1'>
      {posts.map((post, index) => (
        <PostCard post={post} key={post.title} />
      ))}
      </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
          <PostWidget />
          <Categories />
          </div>
      </div>
    </main>
  )
}

/* '45 */