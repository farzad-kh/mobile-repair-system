 
import AntModal from "../UI/AntModal"
import FormInput from "./FormInput"
 

import AntDrawer from "../UI/AntDrawer"
import { useResponsive } from "../../hook/useResponsive"
import { useFormModalStore } from "../../stores/formModalStore"

const GlobalIssueModal = () => {
    const { open, mode, closeModal } = useFormModalStore()
    const isMobile = useResponsive({ breakpoint: 786 });

    return (
        <>
            {/* for desktop size */}
            {!isMobile &&
                <AntModal
                    width={998}
                    isModalOpen={open}
                    setIsModalOpen={closeModal}

                    title={mode === "create" ? "ثبت درخواست تعمیر" : "ویرایش اطلاعات تعمیر"}
                >
                    <FormInput

                    />
                </AntModal>
            }

            {/* for mobile size */}
            {isMobile &&


                <AntDrawer
                    title={mode === "create" ? "ثبت درخواست تعمیر" : "ویرایش اطلاعات تعمیر"}
                    open={open}
                    onClose={closeModal}
                    >
                    <FormInput
                    />
                </AntDrawer>
           
            }
        </>
    )
}
export default GlobalIssueModal