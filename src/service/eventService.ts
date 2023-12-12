// const proxyUrl = "https://cors-anywhere.herokuapp.com";
const baseHolidayUrl = "https://date.nager.at/api/v3/publicholidays";
const baseEventUrl = "https://today.zenquotes.io/api";
const baseGeoLocationUrl = "https://ipapi.co/json/";

export const getTodayEvents = async (month: number, day: number) => {
  const event = await fetch(`${baseEventUrl}/${month}/${day}`, {
    mode: "cors",
  });
  return event.json();
};

export const getThisYearsHoliday = async (year: number) => {
  const locationData = await getGeoLocation();
  const country = locationData.country;
  const holidays = await fetch(`${baseHolidayUrl}/${year}/${country}`);
  return holidays.json();
};

const getGeoLocation = async () => {
  const location = await fetch(`${baseGeoLocationUrl}`);
  return location.json();
};
