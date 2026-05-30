import { motion, AnimatePresence } from "motion/react";
import IssueCard from "../module/IssueCard";

import { useEffect, useRef } from "react";


import Pagination from "../module/Pagination";
import IssueCardControlers from "../module/IssueCardControllers";

import NotFoundProperty from "../not-found/NotFound";
import { useRepairStore } from "../../stores/repairStore";
import { useFilterIssue } from "../../hook/useFilterIssue";
import { usePagination } from "../../hook/usePagination";

const IssueCardContainer = () => {
  const repairRequests = useRepairStore((state) => state.repairRequests);

  // refScrollUp for next and prev btn to scroll in the the right position
  const refScrollUp = useRef<HTMLDivElement>(null);



  // filters and serach
  const {
    filteredRepairData,
    searchVal,
    debouncedVal,
    setSearchVal,
    selectStatusVal,
    setSelectStatusVal,
    selectDateVal,
    setSelectDateVal,
  } = useFilterIssue({ repairRequests });


  // custom hook for pagination
  const {
    currentItems,
    currentPage,
    maxPage,
    goToPage,
  } = usePagination({
    items: filteredRepairData,
    pageSize: 5,
  });
  // reset page when user search or filter
  useEffect(() => {
    goToPage(1);
  }, [debouncedVal, selectStatusVal]);

  // when data is empty
  if (repairRequests.length === 0) {
    return (
      <NotFoundProperty
        mode="empty"
        title="هنوز درخواست تعمیری ثبت نشده"
        label="اولین درخواست تعمیر موبایل را ثبت کنید."
      />
    );
  }


  return (
    <>
      {/* filters and search display */}
      <IssueCardControlers
        refScrollUp={refScrollUp}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectStatusVal={selectStatusVal}
        setSelectStatusVal={setSelectStatusVal}
        selectDateVal={selectDateVal}
        setSelectDateVal={setSelectDateVal}
      />
      {/* container */}
      <motion.div className="flex flex-col gap-4">
        {filteredRepairData.length === 0 ? (
          <NotFoundProperty
            mode="filter"
            title="نتیجه‌ای پیدا نشد"
            label="فیلتر یا عبارت جستجو را تغییر دهید."
          />
        ) : (
          <AnimatePresence>
            {currentItems.map((item) => (
              <IssueCard key={item.id} data={item} />
            ))}
          </AnimatePresence>
        )}
      </motion.div>
      {/* pagination dispaly */}
      {maxPage > 1 && (
        <motion.div className="mt-6 flex justify-center">
          <Pagination
            currentPage={currentPage}
            maxPage={maxPage}
            goToPage={goToPage}
            refScrollUp={refScrollUp}
          />
        </motion.div>
      )}
    </>
  );
};

export default IssueCardContainer;