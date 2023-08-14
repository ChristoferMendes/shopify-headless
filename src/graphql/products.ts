export const GET_PRODUCTS = `
  query products {
    products(sortKey: TITLE, first: 20) {
        edges {
            node {
                id
                title
                handle
                tags
                priceRange {
                    minVariantPrice {
                        amount
                    }
                }
                images(first: 1) {
                    edges {
                        node {
                            transformedSrc
                            altText
                        }
                    }
                }
            }
            
        }
    }
  }
`