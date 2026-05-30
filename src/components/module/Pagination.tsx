import { toLocaleStringFa } from "@/helper";

type Props = {
  currentPage: number;
  maxPage: number;
  goToPage: (page: number) => void;
  refScrollUp: null | any;
};

export default function Pagination({
  currentPage,
  maxPage,
  goToPage,
  refScrollUp,
}: Props) {
  if (maxPage <= 1) return null;

  const handlePrev = () => {
    goToPage(Math.max(currentPage - 1, 1));
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    goToPage(Math.min(currentPage + 1, maxPage));
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">

      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="
          h-9 px-4
          rounded-sm
          border border-blue-500
          text-blue-500
          text-sm font-medium
          bg-white
          transition-all
          hover:bg-blue-500
          hover:text-white
          disabled:opacity-40
          disabled:cursor-not-allowed
          cursor-pointer
        "
      >
        قبلی
      </button>


      <div className="text-sm text-gray-600 font-medium">
        صفحه {toLocaleStringFa(currentPage)} از {toLocaleStringFa(maxPage)}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === maxPage}
        className="
          h-9 px-4
          rounded-sm
          border border-blue-500
          text-blue-500
          text-sm font-medium
          bg-white
          transition-all
          hover:bg-blue-500
          hover:text-white
          disabled:opacity-40
          disabled:cursor-not-allowed
           cursor-pointer
        "
      >
        بعدی
      </button>

    </div>
  );
}