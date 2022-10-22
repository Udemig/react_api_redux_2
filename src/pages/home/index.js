import Pagination from '../../components/pagination'

function Home() {
  return (
    <main>
      <Pagination
        remoteUrl="/public/categories/listMainCategories"
        title="Categories"
      />

      <hr />

      <Pagination
        remoteUrl="/public/categories/listMainCategories"
        title="Blogs"
      />

    </main>
  )
}


export default Home
