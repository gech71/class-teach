import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-gray-800 text-white`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="block px-6 py-3 hover:bg-gray-700">
            Dashboard
          </a>
          <a href="#" className="block px-6 py-3 hover:bg-gray-700">
            Analytics
          </a>
          <a href="#" className="block px-6 py-3 hover:bg-gray-700">
            Reports
          </a>
          <a href="#" className="block px-6 py-3 hover:bg-gray-700">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header with Mobile Menu Toggle */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome to Dashboard
            </h2>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Card 1
              </h3>
              <p className="text-gray-600">
                This is a responsive card that adapts to screen size.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Card 2
              </h3>
              <p className="text-gray-600">
                This is a responsive card that adapts to screen size.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Card 3
              </h3>
              <p className="text-gray-600">
                This is a responsive card that adapts to screen size.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
