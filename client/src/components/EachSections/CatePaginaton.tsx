import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { useNavigate } from "react-router-dom"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CatePagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const navigate = useNavigate()
  return (
    <Pagination>
      <PaginationContent>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className={`${currentPage == index + 1 ? "border-[#0e5ddd] bg-[#0e5ddd] text-white" : "hover:text-[#0e5ddd] "} `}
              href={`?page=${index + 1}`}
              isActive={currentPage === index + 1}
              onClick={(e) => {
                e.preventDefault()
                onPageChange(index + 1)
                navigate(`?page=${index + 1}`)
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
