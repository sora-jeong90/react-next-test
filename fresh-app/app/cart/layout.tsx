import React from 'react';

interface Props {
    children?: any
}


function Layout({children}:Props) {
    return (
			<div>
				<p className='event-message'>현재 상품은 카드결제 이벤트 상품입니다. </p>
				{children}
			</div>
		)
}

export default Layout;