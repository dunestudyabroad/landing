import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#B298FE] rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#B298FE] rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 w-full max-w-lg border border-blue-100 shadow-xl shadow-orange-100/20">
          <div className="flex flex-col items-center text-center">
            <div>
              <CheckCircle2 className="w-16 h-16 text-[#B298FE] mb-6" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Thank You!
            </h1>
            
            <p className="text-zinc-600 mb-8">
              Your submission has been received. We'll get back to you shortly.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white bg-[#B298FE] hover:bg-[##B98FE]/90 px-6 py-3 rounded-full shadow-lg shadow-orange-500/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}