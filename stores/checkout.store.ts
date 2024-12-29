interface ProductData {
  name: string;
  img: string;
  price: number;
  oldPrice: number;
  rate: number;
  ratePoint: number;
  discount: number;
  qty: number;
}

const initialData: {product: Array<ProductData>} = {
  product: []
}

export const useProductStore = defineStore('product', {
  state: () => initialData,
  getters: {
    currentProduct: (state) => state.product
  },
  actions: {
    set(product: Array<ProductData>){
      this.$patch({product})
    },
    clear(){
      this.$patch(initialData)
    }
  }
})