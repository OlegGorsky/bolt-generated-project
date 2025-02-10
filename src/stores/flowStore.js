import { create } from 'zustand'
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'

export const useFlowStore = create((set, get) => ({
  nodes: [],
  edges: [],
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    })
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    })
  },
  setFlow: (flow) => {
    set({
      nodes: flow.nodes,
      edges: flow.edges,
    })
  },
}))
