import {Button, Dropdown} from "antd";
import {CaretDownOutlined, MenuOutlined} from "@ant-design/icons";
import './styles.scss';
import {menu} from "./constants";

export function GaxonMenu() {

    return (
        <div className='gaxon-menu'>
            <div className='container'>
                <img src={'https://g-axon.com/wp-content/uploads/2018/10/logo-1.png'} alt="gaxon logotype"/>
                <div className='menu-block'>
                    <div className='menu-item'>Home</div>
                    <div className='menu-item'>About Us</div>
                    <div className='menu-item selected'>
                        <Dropdown overlay={menu}>
                            <span>Our products <CaretDownOutlined/></span>
                        </Dropdown>
                    </div>
                    <div className='menu-item'>Contact Us</div>
                </div>
            </div>
            <MenuOutlined className={'menu-icon'} />
            <Button className={'btn'} size={'large'}>Hire Us</Button>
        </div>
    )
}