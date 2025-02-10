import styled from '@emotion/styled'
import { nodeTypes } from '../FlowEditor/nodes'

const SidebarContainer = styled.div`
  width: 200px;
  background: #f8f9fa;
  padding: 15px;
  border-right: 1px solid #ddd;
`

const NodeItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: grab;
  
  &:hover {
    background: #f0f0f0;
  }
`

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <SidebarContainer>
      <h3>Nodes</h3>
      <NodeItem
        draggable
        onDragStart={(e) => onDragStart(e, 'text')}
      >
        Text Node
      </NodeItem>
      <NodeItem
        draggable
        onDragStart={(e) => onDragStart(e, 'button')}
      >
        Button Node
      </NodeItem>
      <NodeItem
        draggable
        onDragStart={(e) => onDragStart(e, 'image')}
      >
        Image Node
      </NodeItem>
    </SidebarContainer>
  )
}

export default Sidebar
