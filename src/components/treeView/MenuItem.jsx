import { useState } from 'react';
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(currentLabel) {
        setDisplayCurrentChildren({ ...displayCurrentChildren, [currentLabel]: !displayCurrentChildren[currentLabel] })
    }

    console.log(displayCurrentChildren);

    return (
        <li>
            <div className='menu-item'>
                <p>{item.label}</p>
                {
                    item?.children?.length
                        ? <span onClick={() => handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label] ? <FaMinus size={25} /> : <FaPlus size={25} />
                            }
                        </span>
                        : null
                }
            </div>
            {
                item?.children?.length && displayCurrentChildren[item.label]
                    ? <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem;


{/* <ul>
    {item?.children?.length
        ? item.children.map((listItem, index) => <MenuItem key={index} item={listItem} />)
        : null
    }
</ul> */}
