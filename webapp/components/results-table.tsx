"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type AnalysisResult = {
  pair: string
  name: string
  meaning: string
  symbol: string
  detail: string
  quality: string
}

export function ResultsTable() {
  const [results, setResults] = useState<AnalysisResult[]>([])

  useEffect(() => {
    const handlePhoneAnalyzed = (event: CustomEvent) => {
      setResults(event.detail)
    }

    // Add event listener
    document.addEventListener("phoneAnalyzed", handlePhoneAnalyzed as EventListener)

    // Clean up
    return () => {
      document.removeEventListener("phoneAnalyzed", handlePhoneAnalyzed as EventListener)
    }
  }, [])

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-serif text-slate-800 mb-6 sm:mb-8 tracking-tight">Kết Quả Phân Tích</h2>

      {/* Mobile Layout */}
      <div className="block sm:hidden space-y-4 mb-8">
        {results.length > 0 ? (
          results.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 ${
                item.quality === "Tốt"
                  ? "bg-emerald-50/50 border-emerald-200"
                  : item.quality === "Xấu"
                    ? "bg-amber-50/50 border-amber-200"
                    : "bg-slate-50/50 border-slate-200"
              }`}
            >
              <div className="text-center mb-3">
                <h3 className="font-serif text-lg text-slate-700 font-medium">{item.name}</h3>
              </div>

              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Ý Nghĩa</div>
                  <div className="font-semibold text-slate-700">{item.meaning}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Câu Thiệu</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.symbol}</div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Chi Tiết</div>
                  <div className="text-sm text-slate-600 leading-relaxed">{item.detail}</div>
                </div>

                <div className="text-center pt-2 border-t border-slate-200">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      item.quality === "Tốt"
                        ? "bg-emerald-100 text-emerald-700"
                        : item.quality === "Xấu"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item.quality}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-slate-500 italic">
            Nhập số điện thoại và nhấn "Phân Tích" để xem kết quả
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block overflow-x-auto rounded-lg border border-slate-200 shadow-sm mb-8">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-800">
              <TableHead className="font-medium text-white w-1/4 text-center py-4 text-base tracking-wide">
                Tên
              </TableHead>
              <TableHead className="font-medium text-white w-3/4 text-center py-4 text-base tracking-wide">
                Ý Dịch
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.length > 0 ? (
              results.map((item, index) => (
                <TableRow
                  key={index}
                  className={`border-b hover:bg-slate-50 transition-colors ${
                    item.quality === "Tốt"
                      ? "bg-emerald-50/50"
                      : item.quality === "Xấu"
                        ? "bg-amber-50/50"
                        : "bg-slate-50/50"
                  }`}
                >
                  <TableCell className="font-serif text-center text-lg py-4 text-slate-700">{item.name}</TableCell>
                  <TableCell className="py-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <div className="text-center lg:text-center">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1 lg:hidden">Ý Nghĩa</div>
                        <span className="font-semibold text-base text-slate-700">{item.meaning}</span>
                      </div>
                      <div className="lg:text-left">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1 lg:hidden">Biểu Tượng</div>
                        <span className="text-base text-slate-600 leading-relaxed">{item.symbol}</span>
                      </div>
                      <div className="lg:text-left">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1 lg:hidden">Chi Tiết</div>
                        <span className="text-sm text-slate-600 leading-relaxed">{item.detail}</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1 lg:hidden">Đánh Giá</div>
                        <span
                          className={`font-medium text-base ${
                            item.quality === "Tốt"
                              ? "text-emerald-600"
                              : item.quality === "Xấu"
                                ? "text-amber-600"
                                : "text-slate-600"
                          }`}
                        >
                          {item.quality}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-10 text-slate-500 text-lg italic">
                  Nhập số điện thoại và nhấn "Phân Tích" để xem kết quả
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center sm:justify-end">
        <div className="max-w-lg bg-slate-50 border-l-2 border-slate-300 p-4 rounded-lg shadow-sm text-sm text-slate-700">
          <p className="leading-relaxed text-sm sm:text-base">
            "Mỗi số điện thoại chỉ phản ánh 1 mặt về tính cách, công việc, tiền bạc hoặc sức khoẻ, nếu dùng càng lâu thì
            ảnh hưởng càng lớn, tuy nhiên vẫn có ngoại lệ, nếu người đó có căn đức tốt, làm từ thiện nhiều thì những thứ
            bên trong số điện thoại sẽ ảnh hưởng ít hơn, còn nếu bình thường thì những thứ trong số điện thoại sẽ ảnh
            hưởng 60-70% trong cuộc sống, nếu mình cảm thấy CHỊU HẾT NỔI thì lúc đó nên đổi số điện thoại."
          </p>
          <p className="text-right mt-2 font-medium text-slate-700 text-sm sm:text-base">
            - Minh Hoàng - 0938.39.99.68
          </p>
        </div>
      </div>
    </div>
  )
}
