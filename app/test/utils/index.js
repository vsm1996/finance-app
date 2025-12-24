export const computeStatus = (node) => {
  if (!node.children || node.children.length === 0) {
    return node.status ?? null;
  }

  const childStatuses = node.children.map(computeStatus);

  if (childStatuses.every(s => s === "Met")) return "Met";
  if (childStatuses.some(s => s === "Unmet" || s === null)) return "Unmet";

  return null;
};