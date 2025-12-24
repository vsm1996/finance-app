'use client'
import { useState } from 'react'
import { updateNodeStatus, useToggleMap } from './hooks/index'

import TreeNode from './components/treeNode'

import initialData from './utils/data'

// { node, onStatusChange, level = 0, toggle, isOpen }
function App() {
  const [tree, setTree] = useState(initialData);
  const { isOpen, toggle } = useToggleMap();

  const handleStatusChange = (id, status) => {
    const updated = updateNodeStatus(tree, id, status);
    setTree(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Requirements Tree</h2>
      {tree.map(node => (
        <TreeNode
          key={node.id}
          node={node}
          isOpen={isOpen}
          toggle={toggle}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default App