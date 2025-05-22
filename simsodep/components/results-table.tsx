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
      <h2 className="text-3xl font-bold text-emerald-600 mb-8 text-center tracking-wide">Kết Quả Phân Tích</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-emerald-500 to-teal-600">
              <TableHead className="font-bold text-white w-1/4 text-center py-4 text-lg tracking-wide">Tên</TableHead>
              <TableHead className="font-bold text-white w-3/4 text-center py-4 text-lg tracking-wide">
                Ý Dịch
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.length > 0 ? (
              results.map((item, index) => (
                <TableRow
                  key={index}
                  className={`border-b hover:bg-gray-50 transition-colors ${
                    item.quality === "Tốt" ? "bg-green-50" : item.quality === "Xấu" ? "bg-red-50" : "bg-gray-50"
                  }`}
                >
                  <TableCell className={`font-bold text-center text-lg py-4 text-slate-700`}>{item.name}</TableCell>
                  <TableCell className="py-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <span className={`font-semibold text-base text-emerald-700 tracking-wide`}>{item.meaning}</span>
                      </div>
                      <div className="text-base text-slate-700 leading-relaxed">
                        <span>{item.symbol}</span>
                      </div>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        <span>{item.detail}</span>
                      </div>
                      <div className="text-center">
                        <span
                          className={`font-bold text-base ${
                            item.quality === "Tốt"
                              ? "text-emerald-600"
                              : item.quality === "Xấu"
                                ? "text-red-600"
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
                  Nhập số điện thoại và nhấn "Xem" để xem kết quả
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
