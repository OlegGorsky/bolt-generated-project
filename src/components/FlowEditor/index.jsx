import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import { useFlowStore } from '../../stores/flowStore'
import { nodeTypes } from './nodes'
import styled from '@emotion/styled'

const FlowContainer = styled.div`
  flex: 1;
  height: 100%;
`

const FlowEditor = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowStore()

  return (
    <FlowContainer>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </FlowContainer>
  )
}

export default FlowEditor
