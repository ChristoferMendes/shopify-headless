export async function storeFront(query: string, variables = {}) {
    if (!process.env.NEXT_PUBLIC_STOREFRONT_API_URL) return console.error('Storefront API URL not found');

    if (!process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN) return console.error('Storefront API Token not found')

    const response = await fetch(process.env.NEXT_PUBLIC_STOREFRONT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN
        },
        body: JSON.stringify({query, variables})
    })

    const { data } = await response.json();

    return { data }
}