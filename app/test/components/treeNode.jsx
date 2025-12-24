import React from 'react'

const TreeNode = ({ node, onStatusChange, level = 0, toggle, isOpen }) => {
  const indent = { marginLeft: level * 20 };

  const isLeaf = !node.children || node.children.length === 0;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", ...indent }}>

        {/* Expand/Collapse Button */}
        {!isLeaf && (
          <button onClick={() => toggle(node.id)}>
            {isOpen(node.id) ? "-" : "+"}
          </button>
        )}

        {/* Title */}
        <span style={{ marginLeft: 8 }}>{node.title}</span>

        {/* Status */}
        <span style={{ marginLeft: 12, fontWeight: "bold" }}>
          {node.status ? `(${node.status})` : ""}
        </span>

        {/* Leaf Status Controls */}
        {isLeaf && (
          <select
            style={{ marginLeft: 12 }}
            value={node.status ?? ""}
            onChange={(e) => onStatusChange(node.id, e.target.value || null)}
          >
            <option value="">--</option>
            <option value="Met">Met</option>
            <option value="Unmet">Unmet</option>
          </select>
        )}
      </div>

      {/* Children */}
      {node.children && isOpen(node.id) && (
        <div>
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              onStatusChange={onStatusChange}
              toggle={toggle}
              isOpen={isOpen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode
