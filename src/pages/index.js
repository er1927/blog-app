import Head from 'next/head'

const posts = [
  {title: 'Testing', excerpt: 'This is a test.'},
  {title: 'Testing 01', excerpt: 'This is another test.'}
]

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8 bg-gray-500">
      <Head>
        <title>CMS blog</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-8 col-span-1'>
      {posts.map((post, index) => (
        <div>
          {post.title}
          {post.excerpt}
        </div>
      ))}
      </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8 bg-pink-900'>
          <p>HEY</p>
          </div>
      </div>
    </main>
  )
}
