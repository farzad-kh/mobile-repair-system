

import { useState, memo, ReactNode } from "react";
import { Button } from "antd";
import { motion, AnimatePresence } from "motion/react";
import { MoreOutlined } from "@ant-design/icons";





interface SpeedDialProps {
    editButton: ReactNode
    deleteButton: ReactNode
}
const SpeedDial = ({ editButton, deleteButton }: SpeedDialProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex  items-end gap-2 self-end ">

            <AnimatePresence>
                {open && (
                    <>
                        {/* // edit Button */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            {editButton}
                        </motion.div>




                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                        >
                            {deleteButton}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
  

                <Button
                    type="primary"
 
                    className={`${open ? "border" : ""}`}
                    shape="circle"
                    icon={<MoreOutlined className="text-xl! text-white!" />}
                    onClick={() => setOpen(!open)}
                />

  



        </div>
    );
}
export default memo(SpeedDial)