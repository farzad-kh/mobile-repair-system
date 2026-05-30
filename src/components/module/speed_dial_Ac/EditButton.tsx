
import { Button, Tooltip } from 'antd'
import { EditOutlined } from "@ant-design/icons";
import { useFormModalStore } from '@/stores/formModalStore';
import { RepairFieldType } from '@/types/repair';
import { useResponsive } from '@/hook/useResponsive';


const EditButton = ({ data }: { data: RepairFieldType }) => {
    const openEditModal = useFormModalStore(state => state.openEditModal)

    const ismobile = useResponsive({ breakpoint: 786 })

    return (
        <>

            {!ismobile ?

                <Tooltip title={"ویرایش"}>

                    <Button
                        shape="circle"
                        icon={<EditOutlined />}
                        onClick={() => openEditModal(data)}
                    />
                </Tooltip>

                :
                <Button
                    shape="circle"
                    icon={<EditOutlined />}
                    onClick={() => openEditModal(data)}
                />
            }



        </>
    )
}

export default EditButton