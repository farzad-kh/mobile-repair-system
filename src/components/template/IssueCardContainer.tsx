import { motion, AnimatePresence } from "motion/react";
import IssueCard from "../module/IssueCard";
import { useRepairStore } from "@/stores/repairStore";
import { useEffect, useRef } from "react";

import { usePagination } from "@/hook/usePagination";
import Pagination from "../module/Pagination";
import IssueCardControlers from "../module/IssueCardControllers";
import { useFilterIssue } from "@/hook/useFilterIssue";
import NotFoundProperty from "../not-found/NotFound";

const IssueCardContainer = () => {
  const repairRequests = useRepairStore((state) => state.repairRequests);
  // refScrollUp for next and prev btn to scroll in the the right position
  const refScrollUp = useRef<HTMLDivElement>(null);


  // filters and serach
  const { filteredRepairData, searchVal, debouncedVal,
    setSearchVal, selectStatusVal, setSelectStatusVal,
    selectDateVal, setSelectDateVal } = useFilterIssue({ repairRequests })





  // custom hook for pagination
  const {
    currentItems, currentPage, maxPage, goToPage, } = usePagination({ items: filteredRepairData, pageSize: 5 });
  useEffect(() => {
    goToPage(1);
  }, [debouncedVal, selectStatusVal]);







  // when data is empty
  if (repairRequests.length === 0) return <NotFoundProperty
    mode="empty"
    title="هنوز درخواست تعمیری ثبت نشده"
    label="اولین درخواست تعمیر موبایل را ثبت کنید."
  />



  return (
    <>
      {/* filters and search display */}
      <IssueCardControlers refScrollUp={refScrollUp}
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectStatusVal={selectStatusVal}
        setSelectStatusVal={setSelectStatusVal}
        selectDateVal={selectDateVal}
        setSelectDateVal={setSelectDateVal}
      />

      {/* container */}
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >

        {/* issue card display */}
        {filteredRepairData.length <= 0 ?
          <NotFoundProperty
            mode="filter"
            title="نتیجه‌ای پیدا نشد"
            label="فیلتر یا عبارت جستجو را تغییر دهید."
          />

          :
          <AnimatePresence>
            {currentItems.map((item) => (
              <IssueCard key={item.id} data={item} />
            ))}
          </AnimatePresence>


        }



      </motion.div>

      {/* pagination dispaly */}
      {maxPage > 1 && (
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="mt-6 flex justify-center">
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