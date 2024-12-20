// src/utils/eventDateParse.ts

import { EventDate } from "@/sanity/types";

export interface EventDateType {
  date?: string;
  start_time?: string;
  end_time?: string;
  dates?: Array<{
    date: string;
    start_time?: string;
    end_time?: string;
  }>;
  end_date?: string;
}

export const buildEventDate = (eventDate: EventDate): EventDateType => {
  switch (eventDate.date_type) {
    case "single":
      return {
        date: eventDate.single_date?.date || "Invalid date",
        start_time: eventDate.single_date?.start_time || "",
        end_time: eventDate.single_date?.end_time || "",
      };
    case "multiple":
      return {
        dates:
          eventDate.dates?.map((dateItem) => ({
            date: dateItem.date,
            start_time: dateItem.start_time || "",
            end_time: dateItem.end_time || "",
          })) || [],
      };
    case "range":
      return {
        date: eventDate.start_date || "Invalid start date",
        start_time: eventDate.start_time || "",
        end_time: eventDate.end_time || "",
        end_date: eventDate.end_date || "Invalid end date",
      };
    default:
      return { date: "Invalid date", start_time: "", end_time: "" };
  }
};

// Date formatting utility function
export const formatDate = (
  dateStr: string | number | Date,
  startTime?: string,
  endTime?: string,
  locale?: Intl.LocalesArgument,
) => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "Invalid Date";

  const day = date.getDate().toString().padStart(2, "0");
  const monthName = date.toLocaleString(locale, { month: "long" });
  const year = date.getFullYear(); // Retrieve the year
  const timeRange = startTime && endTime ? `h. ${startTime} - ${endTime}` : "";

  return `${day} ${monthName} ${year} ${timeRange}`.trim(); // Include year in the return
};
