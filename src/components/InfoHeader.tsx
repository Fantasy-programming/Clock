function InfoHeader({ text }: Readonly<{ text: string }>) {
  return (
    <div className=" text-xl uppercase order-3 border-b-2 border-b-tertiary py-2 ">
      {text}
    </div>
  );
}

export default InfoHeader;
