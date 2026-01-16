const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-10">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="font-bold text-xl mb-2">Card Header</div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          This is the main content area of the card. It can hold text, images,
          or other components.
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag2
        </span>
      </div>
    </div>
  );
};

export default Card;
