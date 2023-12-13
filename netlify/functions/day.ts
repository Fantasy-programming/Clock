import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { day, month } = context.params;
  try {
    const event = await fetch(`https://today.zenquotes.io/api/${month}/${day}`);
    const eventJson = await event.json();
    return new Response(JSON.stringify(eventJson));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const config: Config = {
  path: "/day/:month/:day",
};
