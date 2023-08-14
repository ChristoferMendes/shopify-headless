import { GET_PRODUCTS } from '~/graphql/products'
import { storeFront } from '~/services/storeFront'

export default async function Home() {
  const { data } = await storeFront(GET_PRODUCTS) ?? {}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.products.edges.map((item: any) => {
        const product = item.node;

        return (
          <p key={product.handle}>{product.title}</p>
        )
      })}
    </main>
  )
}
