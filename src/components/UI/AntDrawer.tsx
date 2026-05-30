import { Drawer } from 'antd'
import { ReactNode } from 'react';


interface AntDrawerProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode
    title?: string
}
function AntDrawer({ open, onClose, children, title }: AntDrawerProps) {
    return (
        <Drawer
            title={title}
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            placement='bottom'
            size={"100%"}
             
      
            open={open}
        >
            {children}
        </Drawer>
    )
}

export default AntDrawer