import { parse, stringify } from 'yaml'
import { saveAs } from 'file-saver'

const loadBlocks = async () => {
  try {
    const response = await fetch('/src/data/blocks.yml')
    const text = await response.text()
    return parse(text)
  } catch (error) {
    console.error('Error loading blocks:', error)
    return { blocks: {} }
  }
}

const loadProject = async (projectName = 'default') => {
  try {
    const response = await fetch(`/src/data/projects/${projectName}.yml`)
    const text = await response.text()
    return parse(text)
  } catch (error) {
    console.error('Error loading project:', error)
    return { nodes: [], edges: [] }
  }
}

const saveProject = (projectData, projectName = 'default') => {
  const yaml = stringify({
    version: '1.0',
    name: projectData.name || 'Untitled Project',
    description: projectData.description || '',
    created: projectData.created || new Date().toISOString().split('T')[0],
    updated: new Date().toISOString().split('T')[0],
    nodes: projectData.nodes,
    edges: projectData.edges
  })
  
  const blob = new Blob([yaml], { type: 'text/yaml;charset=utf-8' })
  saveAs(blob, `${projectName}.yml`)
}

const exportToYaml = (flowData) => {
  const yaml = stringify({
    nodes: flowData.nodes,
    edges: flowData.edges,
    version: '1.0'
  })
  
  const blob = new Blob([yaml], { type: 'text/yaml;charset=utf-8' })
  saveAs(blob, 'chatbot-flow.yml')
}

const importFromYaml = async (file) => {
  const text = await file.text()
  const data = parse(text)
  return {
    nodes: data.nodes || [],
    edges: data.edges || []
  }
}

export {
  loadBlocks,
  loadProject,
  saveProject,
  exportToYaml,
  importFromYaml
}
