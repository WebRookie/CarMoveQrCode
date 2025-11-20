
import './App.css'
import carrot from './assets/images/bobo.png'
import React, { useState } from 'react'
import { Button } from 'antd-mobile'
import MakePhoneCallModal from './components/MakePhoneCallModal/MakePhoneCallModal'




function App() {
    const [showModal, setShowModal] = useState(false)
    console.log('showModal:', showModal); // 点击按钮后应输出 true
  return (
    <div className="App">
          <div className="header">
              <div className="bigTitle">🎸 五月天 🎤</div>
              <div>如果给您造成不便，请联系车主，车主会尽快离开</div>
              <div style={{marginTop:'12px'}}>"人生海海，先停车再说"</div>
          </div>
          <div className="carInfo">
               <div  style={{marginBottom: '16px'}}>
                <img src={carrot} className="carIcon" alt="carrot" />
               </div>
               <div style={{ display: 'flex',marginLeft: '10px' }}>
                   🚗<div className="carDetials">豫CAA2933</div>
               </div>


          </div>
          <div className="userInfo">
              <div className="item">
                <div className="label">车主姓名</div>
                <div className="itemValue">不愿透露姓名的wmls
                </div>
             </div>
             <div className="item">
                 <div className="label">车牌号码</div>
                 <div className="itemValue">豫CAA2933</div>
             </div>
             <div className="item">
                 <div className="label">联系电话</div>
                 <div className="itemValue">157****8228</div>
             </div>


          </div>
          <div className="message-section">
               <Button className="btn btn-call" type="button" onClick={() => setShowModal(true)}>
                📞 电话联系五迷老师
              </Button>
          </div>
          {showModal && <MakePhoneCallModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
