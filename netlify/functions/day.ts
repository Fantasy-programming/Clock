import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { day, month } = context.params;
  try {
    const event = await fetch(`https://today.zenquotes.io/api/${month}/${day}`);
    const eventJson = await event.json();
    return new Response(eventJson, { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const config: Config = {
  path: "/day/:month/:day",
};
