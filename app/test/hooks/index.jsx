'use client'

import { useState } from 'react'

import { computeStatus } from '../utils';

export const updateNodeStatus = (tree, id, newStatus) => {
  return tree.map(node => {
    if (node.id === id && (!node.children || node.children.length === 0)) {
      return { ...node, status: newStatus };
    }

    if (node.children) {
      const updatedChildren = updateNodeStatus(node.children, id, newStatus);
      return {
        ...node,
        children: updatedChildren,
        status: computeStatus({ ...node, children: updatedChildren })
      };
    }

    return node;
  });
};

export const useToggleMap = () => {
  const [openMap, setOpenMap] = useState({});

  const toggle = (id) =>
    setOpenMap(prev => ({ ...prev, [id]: !prev[id] }));

  const isOpen = (id) => !!openMap[id];

  return { isOpen, toggle };
};