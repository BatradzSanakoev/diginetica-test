import SidebarCategories from '../SidebarCategories/SidebarCategories';
import SidebarPrice from '../SidebarPrice/SidebarPrice';
import SidebarBrands from '../SidebarBrands/SidebarBrands';

export default function Sidebar() {

    return (
        <div className='sidebar'>
            <SidebarCategories />
            <SidebarPrice />
            <SidebarBrands />
        </div>
    )
}