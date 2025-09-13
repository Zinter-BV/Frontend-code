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
  // Handle null, undefined, or empty input
  if (!input) {
    return "Invalid time";
  }

  let date;

  // Check if input is in HH:MM format (like "06:08")
  if (typeof input === "string" && /^\d{1,2}:\d{2}$/.test(input)) {
    const [hours, minutes] = input.split(":").map((num) => parseInt(num, 10));

    // Validate hours and minutes
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return "Invalid time";
    }

    // Create a date object with today's date and the provided time
    date = new Date();
    date.setHours(hours, minutes, 0, 0);
  }
  // Handle existing Date objects or date strings
  else {
    date = new Date(input);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid time";
    }
  }

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
