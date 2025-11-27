export default function FamilyTreeLoader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="relative w-40 h-40 scale-110 animate-fadeIn">
        
        {/* Parent Node */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-6 bg-green-700 rounded-full animate-nodePulse shadow-lg"></div>

        {/* Child Left Node */}
        <div className="absolute bottom-4 left-4 w-5 h-5 bg-green-500 rounded-full animate-bounceSlow shadow-md"></div>

        {/* Child Right Node */}
        <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full animate-bounceSlow shadow-md"></div>

        {/* Bottom Grandchildren */}
        <div className="absolute bottom-0 left-1/2 -translate-x-[60px] w-4 h-4 bg-green-400 rounded-full animate-float shadow"></div>
        <div className="absolute bottom-0 left-1/2 translate-x-[60px] w-4 h-4 bg-green-400 rounded-full animate-float shadow"></div>

        {/* Lines */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 w-1 h-16 bg-green-300 animate-growLine origin-top"></div>

        <div className="absolute bottom-10 left-7 w-14 h-1 bg-green-300 rotate-25 animate-growLine origin-left"></div>

        <div className="absolute bottom-10 right-7 w-14 h-1 bg-green-300 -rotate-25 animate-growLine origin-right"></div>

        {/* Lines to grandchildren */}
        <div className="absolute bottom-3 left-1/2 -translate-x-[40px] w-1 h-6 bg-green-200 animate-growLine origin-top"></div>
        <div className="absolute bottom-3 left-1/2 translate-x-[40px] w-1 h-6 bg-green-200 animate-growLine origin-top"></div>

      </div>
    </div>
  );
}
