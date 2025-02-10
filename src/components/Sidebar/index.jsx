import { useEffect } from 'react'
import styled from '@emotion/styled'
import { useBlockStore } from '../../stores/blockStore'

const SidebarContainer = styled.div`
  width: 250px;
  background: #f8f9fa;
  padding: 15px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
`

const Category = styled.div`
  margin-bottom: 20px;
`

const CategoryTitle = styled.h3`
  margin: 0 0 10px 0;
  padding: 5px;
  font-size: 14px;
  color: #666;
`

const BlockItem = styled.div`
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
  const { blocks, categories, loadBlockDefinitions } = useBlockStore()

  useEffect(() => {
    loadBlockDefinitions()
  }, [])

  const onDragStart = (event, blockType) => {
    event.dataTransfer.setData('application/reactflow', blockType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <SidebarContainer>
      {categories.map(category => (
        <Category key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          {Object.entries(blocks)
            .filter(([_, block]) => block.category === category)
            .map(([type, block]) => (
              <BlockItem
                key={type}
                draggable
                onDragStart={(e) => onDragStart(e, type)}
              >
                {block.name}
              </BlockItem>
            ))}
        </Category>
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
