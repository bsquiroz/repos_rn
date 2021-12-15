import { MenuItem } from '../interfaces/appInterfaces'

export const menuItems: MenuItem[] = [
	{
		name: 'Animation 101',
		icon: 'cube-outline',
		component: 'Animation101Screen'
	},
	{
		name: 'Animation 1011',
		icon: 'book-outline',
		component: 'Animation1011Screen'
	},
	{
		name: 'Animation 102',
		icon: 'albums-outline',
		component: 'Animation102Screen'
	},
	{
		name: 'Switch ',
		icon: 'toggle-outline',
		component: 'SwitchScreen'
	},
	{
		name: 'Alerts Screen',
		icon: 'alert-circle-outline',
		component: 'AlertScreen'
	},
	{
		name: 'Text Input',
		icon: 'text-outline',
		component: 'TextInputScreen'
	},
	{
		name: 'Pull to refresh',
		icon: 'refresh-outline',
		component: 'PullToRefresh'
	},
	{
		name: 'Section list',
		icon: 'list-outline',
		component: 'customSectionList'
	},
	{
		name: 'Modal',
		icon: 'wallet-outline',
		component: 'ModalScreen'
	},
	{
		name: 'Infinite Scroll',
		icon: 'infinite',
		component: 'InfiniteScrollScreen'
	}
]
