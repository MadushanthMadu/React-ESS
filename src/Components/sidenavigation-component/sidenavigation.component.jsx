import React, {useEffect, useRef} from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import 'rsuite/dist/rsuite.min.css';

export const SideNavigation = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [activeKey, setActiveKey] = React.useState('1');

  const navtab = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navtab.current && !navtab.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div style={{width: expanded ? '100%' : '56px', position:'absolute', zIndex:'5', background: expanded && "rgba(0,0,0,0.5)"}}>
        <Sidenav ref={navtab} expanded={expanded} style={{width: expanded ? '240px' : '56px'}}>
            <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={setActiveKey}>
                    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                        Dashboard
                    </Nav.Item>

                    <Nav.Item eventKey="2" icon={<GroupIcon />}>
                        User Group
                    </Nav.Item>

                    <Nav.Menu placement="rightStart" eventKey="3" title="Advanced" icon={<MagicIcon />}>
                        <Nav.Item eventKey="3-1">Geo</Nav.Item>

                        <Nav.Item eventKey="3-2">Devices</Nav.Item>

                        <Nav.Item eventKey="3-3">Loyalty</Nav.Item>

                        <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                    </Nav.Menu>

                    <Nav.Menu
                    placement="rightStart"
                    eventKey="4"
                    title="Settings"
                    icon={<GearCircleIcon />}
                    >
                        <Nav.Item eventKey="4-1">Applications</Nav.Item>

                        <Nav.Item eventKey="4-2">Channels</Nav.Item>

                        <Nav.Item eventKey="4-3">Versions</Nav.Item>

                        <Nav.Menu eventKey="4-5" title="Custom Action">
                            <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>

                            <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                        </Nav.Menu>
                    </Nav.Menu>
                </Nav>
            </Sidenav.Body>

            <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
        </Sidenav>
    </div>
  );
};