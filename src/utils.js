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

export const formatTextLength = (text) => {
  return text.length > 30 ? text.slice(0, 30) + "..." : text;
};

export function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString.split("T")[0]);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
export function getDayOfWeek(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString.split("T")[0]);

  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export function convertTo12Hour(input) {
  console.log(input);
  const date = new Date(input);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
