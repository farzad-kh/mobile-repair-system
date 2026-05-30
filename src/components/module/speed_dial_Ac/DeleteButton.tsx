import { Button, Popconfirm, Tooltip } from 'antd'
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { createStaticStyles } from 'antd-style';
import { useNotificationContext } from '../../../context/NotificationProvider';
import { useRepairStore } from '../../../stores/repairStore';
import { useResponsive } from '../../../hook/useResponsive';

const classNames = createStaticStyles(({ css }) => ({
    container: css`
    padding: 10px;
    border:1px solid #ddd
  `,
}));
const DeleteButton = ({ issueId }: { issueId: string }) => {
    const removeIssue = useRepairStore(state => state.removeIssue)
    const openNotification = useNotificationContext()
    const removeIssueHandler = (id: string) => {
        removeIssue(id)
        openNotification!({
            status: "اطلاعات با موفقیت حذف شد.",
            type: "success",
        });

    }
    const ismobile = useResponsive({ breakpoint: 786 })
    return (

        <>
            {!ismobile ?
                <Tooltip color="red" title="حذف">
                    <Popconfirm
                        classNames={classNames}
                        placement='topLeft'
                        title={
                            null
                        }
                        icon={null}
                        description=
                        {
                            <div className='w-full text-right flex gap-1  '>
                                <p>
                                    آیا از حذف این مورد مطمئن هستید؟
                                </p>

                                <InfoCircleOutlined style={{ color: "#f25632" }} />
                            </div>
                        }





                        okText="حذف"
                        cancelText="انصراف"
                        okButtonProps={{ danger: true }}
                        onConfirm={() => removeIssueHandler(issueId)}
                    >
                        <Button
                            shape="circle"
                            danger
                            icon={<DeleteOutlined />}
                        />
                    </Popconfirm>
                </Tooltip>

                :

                <Popconfirm
                    classNames={classNames}
                    placement='topLeft'
                    title={
                        null
                    }
                    icon={null}
                    description=
                    {
                        <div className='w-full text-right flex gap-1  '>
                            <p>
                                آیا از حذف این مورد مطمئن هستید؟
                            </p>

                            <InfoCircleOutlined style={{ color: "#f25632" }} />
                        </div>
                    }





                    okText="حذف"
                    cancelText="انصراف"
                    okButtonProps={{ danger: true }}
                    onConfirm={() => removeIssueHandler(issueId)}
                >
                    <Button
                        shape="circle"
                        danger
                        icon={<DeleteOutlined />}
                    />
                </Popconfirm>



            }

        </>
    )
}

export default DeleteButton