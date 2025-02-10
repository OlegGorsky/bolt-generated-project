import { Handle, Position } from 'reactflow'
import styled from '@emotion/styled'

const NodeContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: white;
  border: 1px solid #ddd;
  min-width: 150px;
`

const TextNode = ({ data }) => {
  return (
    <NodeContainer>
      <Handle type="target" position={Position.Top} />
      <div>
        <input
          type="text"
          value={data.text}
          onChange={(e) => data.onChange(e.target.value)}
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </NodeContainer>
  )
}

export default TextNode
