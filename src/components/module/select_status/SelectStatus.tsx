import { Popover, Segmented } from 'antd'

// import { createStaticStyles } from 'antd-style';
import type { GetProp, PopoverProps, SegmentedProps } from 'antd';
import { report_status_map, ReportStatus } from '@/helper';
import { useRepairStore } from '@/stores/repairStore';
import { useNotificationContext } from '@/context/NotificationProvider';

const styleFn: SegmentedProps['styles'] = (info): GetProp<SegmentedProps, 'styles', 'Return'> => {
  if (info.props.vertical) {
    return {
      root: {
        border: "1px solid #ddd",
        padding: 4,
        width: 150,


      },
      icon: {
        color: '#77BEF0',
      },
      item: {
        textAlign: 'start',
        margin: "4px 0"
      },
    };
  }
  return {};
};





const styles: PopoverProps['styles'] = {
  container: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(6px)",
    transform: "translateZ(0)",
    willChange: "backdrop-filter",


  },

};



export interface SelectStatusProps {
  id: string | null;
  issueStatus: ReportStatus
}

const SelectStatus = ({ issueStatus, id }: SelectStatusProps) => {

  const setUpdateStatus = useRepairStore(s => s.setUpdateStatus)
  const openNotification = useNotificationContext()
  const statusStyles = {
    pending: {
      bg: "#fff7e6",
      text: "#d48806",
      dot: "#faad14",
    },

    repairing: {
      bg: "#f9f0ff",
      text: "#722ed1",
      dot: "#9254de",
    },

    completed: {
      bg: "#e6f4ff",
      text: "#1677ff",
      dot: "#1677ff",
    },
  };


  const options: SegmentedProps<ReportStatus>["options"] = Object.entries(report_status_map).map(
    ([value, item]) => {
  
      const style =
        statusStyles[value as ReportStatus];
      return {
        value: value as ReportStatus,

        label: (
          <div
            className="  
            flex items-center gap-2
            rounded-lg px-2 py-1
            transition
          "
            style={{


            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: style.dot,
              }}
            />

            <span className="text-[0.80rem] font-medium">
              {item.label}
            </span>

          </div>
        ),
      };
    }
  );




  const updateStatusHandler = (value: ReportStatus) => {

    setUpdateStatus({ id, issueStatus: value })
    openNotification!({
      status: "وضعیت با موفقیت تغییر کرد.",
      type: "success",
    });
  }

  return (
    <Popover
      styles={styles}
      trigger="click"
      placement="bottomLeft"
      content={
        <Segmented
          vertical
          value={issueStatus}
          onChange={updateStatusHandler}
          styles={styleFn}
          options={options}
        />
      }
    >
      <button
        className={` ${report_status_map[issueStatus].style}
      flex items-center gap-2
      rounded-full
      px-3 py-1.5
      border
      text-[0.80rem] font-medium
      transition
      cursor-pointer
    `}
      >

        <span
          className={`h-1.5 w-1.5 rounded-full  ${report_status_map[issueStatus].color}`}

        />
        {report_status_map[issueStatus].label}
      </button>
    </Popover>

  )
}

export default SelectStatus