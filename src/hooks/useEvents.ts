import { useQuery } from "@tanstack/react-query";
import { getThisYearsHoliday, getTodayEvents } from "../service/eventService";

export function useTodayEvents(month: number, day: number) {
  return useQuery({
    queryKey: ["todayEvents", month, day],
    queryFn: () => getTodayEvents(month, day),
    refetchOnWindowFocus: false,
  });
}

export function useThisYearsHoliday(year: number) {
  return useQuery({
    queryKey: ["thisYearsHoliday", year],
    queryFn: () => getThisYearsHoliday(year),
    refetchOnWindowFocus: false,
  });
}
