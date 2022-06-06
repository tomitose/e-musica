import products from "./getFetch"

export const getData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
  }