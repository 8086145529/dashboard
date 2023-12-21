import { Switch } from 'antd'

import React from 'react'
import Card from './Card'
// import BtmCard from './BtmCard'
import BottomCard from './BottomCard'

function Home() {
  return (
    <div className='container '>
      <div>
          <div className='heading'>
            <h2 style={{fontSize:'1.5rem',fontWeight:'800'}}>Choose a plan that's just right for you !</h2>
          </div>
          <div className='switch'>
            <Switch  defaultChecked={true} checkedChildren={"Monthly"} unCheckedChildren={"Annually"}  style={{ width: '150px',height:'32px' }}/>
          </div>
          {/* Cards */}
          <div className='cards'>
            <div>
              <Card title='Basic' prevplan={'$89.99/mo'} currplan={'$ 9.99/mo'} usernum={'25'} storagenum={'25'} support={'Email'}/>
            </div>
            <div>
              <Card title='Standard' prevplan={'$189.99/mo'} currplan={'$ 99.99/mo'} usernum={'50'} storagenum={'60'} support={'Email+Chat'}/>
            </div>
            <div>
              <Card title='Premium' prevplan={'$389.99/mo'} currplan={'$ 199.99/mo'} usernum={'75'} storagenum={'100'} support={'Email+Chat+Whatsapp'}/>
            </div>
    
          </div>
      </div>

      <div className='bottom-main'>
          <div>
         <BottomCard className={'one'} caption={'Free Forever'} heading={'Free Starter'} description={'The quickest and easiest way to try Protocols with basic functionalities'} button={'Get Started'} usernum={'Upto 8'} storagenum={'3'} support={'Email'} details={'Basics of Documents,Task Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management included'}/>
          </div>
          <div>
            <BottomCard className={'two'} caption={`Let's Connect`} heading={'Enterprise Plan'} description={'Effortlessly customise and fine-tune services as your needs shift,ensuring the perfect tools for success'} button={'Contact Us'} usernum={'More than 75'} details={'Customisation of all other features'}/>
          </div>
      </div>

    </div>
  )
}

export default Home