function InfoHeader({ text }: { text: "holiday" | "national day calendar" | "this day in history" }) {
  return <div className=" text-xl uppercase order-3 border-b-2 border-b-tertiary py-2 ">{text}</div>;
}

export default InfoHeader;
