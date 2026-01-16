const LayoutContainers = () => {
  return (
    <div>
      <h1>Basic Container</h1>
      <div className="container mx-auto px-4">
        <p>This content is centered and has horizontal padding.</p>
      </div>
      <h1>Grid Layout (3 Columns)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded">Column 1</div>
        <div className="bg-gray-100 p-4 rounded">Column 2</div>
        <div className="bg-gray-100 p-4 rounded">Column 3</div>
      </div>
      <h1>Flexbox Layout (Space Between)</h1>
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-100 p-4 rounded">
        <div className="mb-2 md:mb-0">Left Item</div>
        <div>Right Item</div>
      </div>
    </div>
  );
};

export default LayoutContainers;
