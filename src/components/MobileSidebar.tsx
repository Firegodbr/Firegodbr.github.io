interface MobileSidebarProps {
  onClose: () => void;
}

const MobileSidebar = ({ onClose }: MobileSidebarProps) => {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-25 dark:bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-white/10">
        <div className="flex items-center justify-between">
          <div>
            <a href="https://github.com/Firegodbr" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="/avatar.jpeg"
                alt="Avatar"
              />
            </a>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav Items */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
            <div className="space-y-2 py-6">
              {["Product", "Features", "Marketplace", "Company"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
