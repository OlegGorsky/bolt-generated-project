import { Handle, Position } from 'reactflow'
import styled from '@emotion/styled'
import { useBlockStore } from '../../../stores/blockStore'

const NodeContainer = styled.div`
  padding: 15px;
  border-radius: 8px;
  background: white;
  border: 1px solid #ddd;
  min-width: 180px;
`

const NodeHeader = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
`

const InputField = styled.div`
  margin: 5px 0;
`

const BlockNode = ({ id, data, type }) => {
  const { blocks } = useBlockStore()
  const blockDef = blocks[type]

  if (!blockDef) return null

  return (
    <NodeContainer>
      <Handle type="target" position={Position.Top} />
      <NodeHeader>{blockDef.name}</NodeHeader>
      
      {blockDef.inputs.map((input, index) => (
        <InputField key={index}>
          {input.type === 'text' && (
            <input
              type="text"
              value={data[input.name] || input.default}
              onChange={(e) => data.onChange(input.name, e.target.value)}
              placeholder={input.name}
            />
          )}
          {input.type === 'select' && (
            <select
              value={data[input.name] || input.default}
              onChange={(e) => data.onChange(input.name, e.target.value)}
            >
              {input.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}
        </InputField>
      ))}
      
      <Handle type="source" position={Position.Bottom} />
    </NodeContainer>
  )
}

export default BlockNode
