import { createContext, PropsWithChildren, useContext } from "react";
import { notification } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

type NotifType = "success" | "error" | "info" | "warning";

interface Props {
  status?: string;
  type: NotifType;
  key?: string;
}

type NotificationContextType = (props: Props) => void;

const NotificationContext = createContext<NotificationContextType | null>(null);

const stylesByType = {
  success: {
    border: "rgba(82, 196, 26, 0.6)",
    icon: <CheckCircleOutlined className="text-[#47981f]!" />,
    color: "#52c41a",
  },
  error: {
    border: "rgba(245, 34, 45, 0.6)",
    icon: <CloseCircleOutlined className="text-[#ff4d4f]!" />,
    color: "#ff4d4f",
  },
  info: {
    border: "rgba(24, 144, 255, 0.6)",
    icon: <InfoCircleOutlined className="text-[#1890ff]!" />,
    color: "#1890ff",
  },
  warning: {
    border: "rgba(250, 173, 20, 0.6)",
    icon: <ExclamationCircleOutlined className="text-[#faad14]!" />,
    color: "#faad14",
  },
};

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({ status, type, key }: Props) => {
    if (key) {
      api.destroy(key);
      return;
    }

    const style = stylesByType[type];

    setTimeout(() => {
      api[type]({
        message: null,
        showProgress: true,
        description: (
          <div style={{ fontSize: 14, fontWeight: "bold", lineHeight: "20px", display: "flex", alignItems: "center", gap: 8 }}>

            <span>{status}</span>
          </div>
        ),

        placement: "topRight",
        duration: 3.5,
        style: {
          padding: "24px",
          width: "368px",
          background: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(14px)",
          border: `1px solid ${style.border}`,
          borderRadius: 14,
          boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
        },
      });
    }, 200);
  };

  return (
    <NotificationContext.Provider value={openNotification}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => useContext(NotificationContext);