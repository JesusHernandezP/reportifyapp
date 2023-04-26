import { PlusOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Button, Avatar, Input } from 'antd'

import './Navbar.css'

const ModalButton = () => {

  const navigate = useNavigate()

  function handleClick() {
    navigate("/post");
  }

  return (
    <>

      <div className='nav-container_division'>
          {/* <Button type="primary" shape="circle" icon={<PlusOutlined />} /> */}
          <Button type="default" shape="circle" icon={<PlusOutlined />} onClick={handleClick} />
        </div>

    </>
  )
}
export default ModalButton