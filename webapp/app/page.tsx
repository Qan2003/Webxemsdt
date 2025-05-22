import { PhoneNumberForm } from "@/components/phone-number-form"
import { ResultsTable } from "@/components/results-table"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12 bg-white rounded-xl shadow-lg p-8 border-t-4 border-emerald-500">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4">
            Xem Số Điện Thoại Ứng Dụng Theo Dịch Lý Việt Nam
          </h1>
          <div className="text-teal-600 mb-2">
            <p className="text-lg font-medium">Hướng Dẫn: Thầy Thanh Hải</p>
          </div>
          <div className="text-teal-600">
            <p className="text-lg font-medium">Người Viết: Minh Hoàng</p>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-blue-500 max-w-md mx-auto">
          <PhoneNumberForm />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-emerald-500">
          <ResultsTable />
        </div>
      </div>
    </div>
  )
}
