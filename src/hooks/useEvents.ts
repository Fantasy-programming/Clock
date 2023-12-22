import { useDebounce } from "use-debounce";
import { useQuery } from "@tanstack/react-query";
import { getThisYearsHoliday, getTodayEvents } from "@/service/eventService";

export function useTodayEvents(month: number, day: number) {
  const [debouncedMonth] = useDebounce(month, 1000);
  const [debouncedDay] = useDebounce(day, 1000);

  return useQuery({
    queryKey: ["todayEvents", debouncedDay, debouncedMonth],
    queryFn: () => getTodayEvents(debouncedMonth, debouncedDay),
    refetchOnWindowFocus: false,
  });
}

export function useThisYearsHoliday(year: number) {
  const [debouncedYear] = useDebounce(year, 1000);

  return useQuery({
    queryKey: ["thisYearsHoliday", debouncedYear],
    queryFn: () => getThisYearsHoliday(debouncedYear),
    refetchOnWindowFocus: false,
  });
}
