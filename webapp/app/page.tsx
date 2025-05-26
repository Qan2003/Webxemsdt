import { PhoneNumberForm } from "@/components/phone-number-form"
import { ResultsTable } from "@/components/results-table"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-5xl">
        <header className="text-center mb-8 sm:mb-12 bg-white rounded-lg shadow-sm p-4 sm:p-8 border-t border-t-slate-200">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-slate-800 mb-3 sm:mb-4 tracking-tight leading-tight">
            Phân Tích Số Điện Thoại Theo Dịch Lý Việt Nam
          </h1>
          <div className="text-slate-600 mb-2">
            <p className="text-sm sm:text-base lg:text-lg">Nghiên Cứu & Hướng Dẫn: Thầy Thanh Hải</p>
          </div>
          <div className="text-slate-600">
            <p className="text-sm sm:text-base lg:text-lg">Người Chia Sẻ: Minh Hoàng</p>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 mb-6 sm:mb-10 border border-slate-100 max-w-lg mx-auto">
          <h2 className="text-lg sm:text-xl font-serif text-slate-700 mb-4 sm:mb-6">
            Nhập Số Điện Thoại Cần Phân Tích
          </h2>
          <PhoneNumberForm />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8 border border-slate-100">
          <ResultsTable />
        </div>
      </div>
    </div>
  )
}
