export default function BrothersDayPage() {
  return (
    <div className="min-h-screen bg-[#f6f1eb] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#fffaf5] rounded-[32px] shadow-2xl border border-pink-100 p-8 relative overflow-hidden">
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[10px] text-gray-400 mb-6">
            ♡ For my favourite partner-in-crime
          </p>

          <h1 className="text-5xl font-serif text-[#2c2c2c] leading-tight">
            Happy Brother's Day
          </h1>

          <p className="text-2xl text-blue-400 mt-3 italic font-medium">
            for Bhai ✦
          </p>

          <div className="flex items-center justify-center gap-3 my-8 text-pink-300">
            <div className="h-px w-24 bg-pink-200" />
            <span className="text-xl">✻</span>
            <div className="h-px w-24 bg-pink-200" />
          </div>

          <p className="text-gray-500 leading-8 text-[17px] px-2">
            Today is yours. A little corner of the internet — built just to
            say thanks for every fight we laughed about later, every secret we
            kept, and every time you had my back. Stay a while, big/little
            brother.
          </p>

          <div className="mt-12 bg-[#fff1ee] rounded-3xl p-5 shadow-inner border border-pink-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
                🎵
              </div>

              <div className="flex-1 text-left">
                <h3 className="font-serif text-2xl text-gray-700">Ashiyan</h3>
                <p className="uppercase text-[11px] tracking-[0.25em] text-gray-400 mt-1">
                  A track for you
                </p>
              </div>

              <button className="w-12 h-12 rounded-full bg-pink-300 text-white text-lg shadow-lg hover:scale-105 transition">
                ▶
              </button>
            </div>

            <div className="mt-5">
              <div className="w-full h-2 rounded-full bg-pink-100 overflow-hidden">
                <div className="w-1/3 h-full bg-pink-300 rounded-full" />
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>0:02</span>
                <span>2:51</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-blue-400 italic text-lg">
            press play — this one always reminds me of you
          </p>

          <button className="mt-10 bg-[#b8d4ff] hover:bg-[#a8c8fa] transition text-white px-8 py-4 rounded-2xl shadow-lg tracking-wide text-sm uppercase">
            See Our Album →
          </button>
        </div>

        <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
      </div>
    </div>
  );
}
