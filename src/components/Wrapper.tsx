const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col lg:flex-row h-full font-barlow-condensed">{children}</div>;
};

export default Wrapper;
