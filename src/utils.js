// Count occurrences
export const countMap = (allInventories) =>
  allInventories?.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

// Format the list
export const formattedItems = (countMap) =>
  Object.entries(countMap).map(([item, count]) =>
    count > 1 ? `${item} x ${count}` : item
  );
