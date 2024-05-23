import MenuItem from './MenuItem';

const MenuList = ({ list = [] }) => {

    return (
        <ul className='menu-list-container'>
            {
                list?.length && Array.isArray(list)
                    ? list.map((listItem, index) => <MenuItem key={index} item={listItem} />)
                    : null
            }
        </ul>
    )
}

export default MenuList;