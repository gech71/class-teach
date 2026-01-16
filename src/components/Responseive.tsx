const Responseive = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-blue-200">Item 1</div>
        <div className="p-4 bg-blue-200">Item 2</div>
        <div className="p-4 bg-blue-200">Item 3</div>
        <div className="p-4 bg-blue-200">Item 4</div>
      </div>
      <div className="hidden md:block">
        This content is hidden on small screens, but visible on medium screens
        and up.
      </div>
      <div className="block md:hidden">
        This content is visible on small screens, but hidden on medium screens
        and up.
      </div>
    </>
  );
};

export default Responseive;
