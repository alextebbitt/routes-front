import { EnvironmentOutlined } from '@ant-design/icons';
import "./BigSpin.scss"


const BigSpin = () => {
  return (
    <div className="bigspin">
      <EnvironmentOutlined spin={true} style={{fontSize: "100pt", color: "white"}} />
    </div>
  )
}

export default BigSpin