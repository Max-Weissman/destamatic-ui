import h from './h';
import Shown from './Shown';

import { Observer } from 'destam-dom';

const DropDown = ({ children, label }) => {
    const isDropedDown = Observer.mutable(false)

    const toggle = () => isDropedDown.set(!isDropedDown.get())

    return <div $onclick={toggle}>
        <div $style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {label}
            <div $style={{ display: 'flex', alignItems: 'center' }}>
                <i $class='chevron-icon' $style={{ cursor: 'pointer' }}>
                    {/* replace with icon component: */}
                    {isDropedDown.map((show) => show ? `⏶` : `⏷`)}
                </i>
            </div>
        </div>
        <Shown value={isDropedDown} children={children} />
    </div>
}

export default DropDown;
