import './index.css'
import {Button, Popup} from "antd-mobile";

export default function CallModal({ onClose}) {
  const confirmCall = () => {
    window.location.href = 'tel:15709108228';
  }
      return (
        <Popup position={'bottom'} visible={true} onMaskClick={() => {
                  onClose()
                 }}  onClose={() => {
                    onClose()
                  }}>
            <div className="modal-content">
              <div className="modal-header">
                <h3>确认拨打电话</h3>
              </div>
              <div className="modal-body">
                <p>您即将拨打电话</p>
                <p  style={{fontWeight: 600, color: '#FF6B6B', marginTop: '10px'}}>157****8228</p>
                <p style={{marginTop: '15px', fontSize: '14px', color: '#999'}}>
                  请确认是否要拨打电话联系挪车？
                </p>
              </div>
              <div className="modal-footer">
                <Button className="modal-btn cancel" onClick={() => onClose()}>取消</Button>
                <Button className="modal-btn confirm" onClick={ () => confirmCall()}>确认拨打</Button>
              </div>
            </div>
        </Popup>

      )

    }