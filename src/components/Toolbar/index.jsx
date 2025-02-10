import styled from '@emotion/styled'
import { useFlowStore } from '../../stores/flowStore'
import { exportToYaml, importFromYaml } from '../../utils/yamlHelper'

const ToolbarContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 4;
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  padding: 8px 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`

const FileInput = styled.input`
  display: none;
`

const Toolbar = () => {
  const { nodes, edges, setFlow } = useFlowStore()

  const handleExport = () => {
    exportToYaml({ nodes, edges })
  }

  const handleImport = async (event) => {
    const file = event.target.files[0]
    if (file) {
      const flow = await importFromYaml(file)
      setFlow(flow)
    }
  }

  return (
    <ToolbarContainer>
      <Button onClick={handleExport}>Export YAML</Button>
      <Button as="label">
        Import YAML
        <FileInput
          type="file"
          accept=".yml,.yaml"
          onChange={handleImport}
        />
      </Button>
    </ToolbarContainer>
  )
}

export default Toolbar
