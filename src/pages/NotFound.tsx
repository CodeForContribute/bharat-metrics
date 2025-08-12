
const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center p-4 font-inter text-white">
            <style>
                {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .bouncing-dot {
            animation: bounce 1.4s infinite ease-in-out both;
        }
        .bouncing-dot:nth-child(1) { animation-delay: -0.32s; }
        .bouncing-dot:nth-child(2) { animation-delay: -0.16s; }
        .bouncing-dot:nth-child(3) { animation-delay: 0s; }
        @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
        }
        `}
            </style>
            <div className="text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-white border-opacity-20 max-w-lg mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-300">
                    Oops!
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-6">
                    It looks like you've stumbled upon a page that's still under construction.
                </p>
                <div className="flex justify-center items-center text-3xl md:text-4xl font-bold mb-8">
                    <span>Service Coming Up</span>
                    <span className="flex ml-3">
            <span className="bouncing-dot w-3 h-3 bg-yellow-300 rounded-full mx-1"></span>
            <span className="bouncing-dot w-3 h-3 bg-yellow-300 rounded-full mx-1"></span>
            <span className="bouncing-dot w-3 h-3 bg-yellow-300 rounded-full mx-1"></span>
          </span>
                </div>
                <p className="text-lg opacity-80">
                    We're working hard to bring you something amazing. Please check back soon!
                </p>
            </div>
        </div>
    );
};

export default NotFound;
