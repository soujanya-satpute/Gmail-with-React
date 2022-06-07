import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import SidebarOpt from './sidebarOpt/SidebarOpt'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelIcon from '@material-ui/icons/Label'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from 'react-redux'
import { openSendMsg } from '../../features/mailSlice'
const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon font-size="large" />}
        onClick={() => dispatch(openSendMsg())}
      >
        {' '}
        Compose{' '}
      </Button>

      <SidebarOpt Icon={InboxIcon} title="Inbox" number={1} selected={true} />
      <SidebarOpt Icon={StarIcon} title="Starred" number={14} />
      <SidebarOpt Icon={AccessTimeIcon} title="Snoozed" number={5} />
      <SidebarOpt Icon={LabelIcon} title="Important" number={11} />
      <SidebarOpt Icon={NearMeIcon} title="Sent" number={23} />
      <SidebarOpt Icon={NoteIcon} title="Drafts" number={2} />
      <SidebarOpt Icon={ExpandMoreIcon} title="More" number={1} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
