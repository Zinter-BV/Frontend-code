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
  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Validate and parse the input date string
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD");
  }

  // Split the date string and create date object
  const [year, month, day] = dateString.split("-").map(Number);

  // Validate the date components
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error("Invalid date values");
  }

  // Create date object (month is 0-indexed in JavaScript)
  const date = new Date(year, month - 1, day);

  // Check if the date is valid (handles things like February 30th)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    throw new Error("Invalid date");
  }

  // Return formatted string
  return `${day} ${months[month - 1]}, ${year}`;
}

// Method 1: Get day of week from date string (YYYY-MM-DD format)
export function getDayOfWeek(dateString) {
  // Array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Validate input format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    throw new Error("Invalid date format. Expected YYYY-MM-DD");
  }

  // Parse the date
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  // Get day of week (0 = Sunday, 1 = Monday, etc.)
  const dayIndex = date.getDay();

  return days[dayIndex];
}

export function convertTo12Hour(timeString) {
  if (typeof timeString !== "string") {
    console.warn("Time must be a string in HH:MM or HH:MM:SS format");
    return "";
  }

  const match = timeString.match(/^([01]?\d|2[0-3]):([0-5]\d)(:\d{2})?$/);
  if (!match) {
    console.warn(
      "Invalid time format. Expected HH:MM or HH:MM:SS (24-hour format)"
    );
    return "";
  }

  const hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);

  let period = "AM";
  let displayHours = hours;

  if (hours === 0) {
    displayHours = 12;
  } else if (hours === 12) {
    period = "PM";
  } else if (hours > 12) {
    displayHours = hours - 12;
    period = "PM";
  }

  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${displayHours}:${formattedMinutes} ${period}`;
}
