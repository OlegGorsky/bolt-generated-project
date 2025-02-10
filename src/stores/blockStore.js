import { create } from 'zustand'
import { loadBlocks } from '../utils/yamlHelper'

export const useBlockStore = create((set) => ({
  blocks: {},
  categories: [],
  loading: false,
  error: null,
  
  loadBlockDefinitions: async () => {
    set({ loading: true })
    try {
      const data = await loadBlocks()
      const categories = [...new Set(
        Object.values(data.blocks)
          .map(block => block.category)
      )]
      
      set({
        blocks: data.blocks,
        categories,
        loading: false
      })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  }
}))
