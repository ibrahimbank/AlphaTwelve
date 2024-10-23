import type { ReactComponentLike } from "prop-types";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export interface MenuItem {

	link?: string;
	icon?: ReactComponentLike;
	name: string;
	badge?: any
}


export const getItems: MenuItem[] = [

			{
				name: "Home",
				icon: HomeIcon,
				link: "/home",
			},
			{
				name: "Events",
				icon: CalendarMonthOutlinedIcon,
				link: "/events",
			},
			{
				name: "Speakers",
				icon: RecordVoiceOverOutlinedIcon,
				link: "/dashboard/prescription/create",
			},
			{
				name: "Reports",
				icon: NotificationsOutlinedIcon,
				link: "/reports",
			},

			{
				name: "Notification",
				icon: NotificationsOutlinedIcon,
				link: "/notification",
				badge: "checked",
			},

			{
			  name: 'Messages',
			  icon: ForumOutlinedIcon,
			  link: '/messages',
			},
			{
			  name: 'Settings',
			  icon: SettingsOutlinedIcon,
			  link: '/settings',

			},



		]
export const getFooterItems: MenuItem[] = [

			{
				name: "Home",
				icon: HomeIcon,
				link: "/home",
			},
			{
				name: "Events",
				icon: CalendarMonthOutlinedIcon,
				link: "/events",
			},
			{
				name: "Speakers",
				icon: RecordVoiceOverOutlinedIcon,
				link: "/dashboard/prescription/create",
			},
			{
				name: "Reports",
				icon: NotificationsOutlinedIcon,
				link: "/reports",
			},

			{
				name: "Profile",
				icon: AccountCircleIcon,
				link: "/profile",
				badge: "checked",
			},



		]

