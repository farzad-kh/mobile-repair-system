import { ReactNode, useEffect } from "react";
import { motion } from "motion/react";
import { CloseOutlined } from "@ant-design/icons";

interface DrawerUIProps {
    open: boolean;
    onClose: () => void;

    title?: ReactNode | string;
    children: ReactNode;

    height?: number | string;
    className?: string;
    overlayClass?: string;
}

const DrawerUI = ({
    open,

    onClose,
    title = "",
    children,
    height,
    className = "",
    overlayClass = "",
}: DrawerUIProps) => {





    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
           
            document.body.style.position = "relative";
            document.body.classList.add("loading_info");
        } else {
            document.body.style.overflow = "";
            document.body.classList.remove("loading_info");
             document.body.style.position = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.classList.remove("loading_info");
        };
    }, [open]);

    if (!open) return null;

    return (
        <>
            {/* Overlay */}
            <motion.div
                className={`fixed inset-0 bg-black/50 z-[50] ${overlayClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Drawer */}
            <motion.div
                className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 z-[70] ${className}`}
                style={{ height }}
                initial={{ transform: "translate3d(0, 100%, 0)" }}
                animate={{ transform: "translate3d(0, 0, 0)" }}
                exit={{ transform: "translate3d(0, 100%, 0)" }}
                transition={{ duration: 0.25 }}
            >
                {/* Header */}
                <div className="flex justify-start gap-2 items-center">
                    <button onClick={onClose} className="text-lg font-bold">
                        <CloseOutlined />
                    </button>

                    {title}
                </div>

                <div className="w-full border-b pb-2 mb-4" />

                {/* Content */}
                <div className="mt-4">
                    {children}
                </div>
            </motion.div>
        </>
    );
};

export default DrawerUI;