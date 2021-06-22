import React from 'react'
import Image from 'react-bootstrap/Image'

const User = ({email, first_name, last_name, avatar}) => {
	
	return (
		<div className='user'>
			<div className='user-avatar'>
				<Image src={avatar} alt='avatar' roundedCircle />
			</div>
			<div className='user-info'>
			<h3>{first_name + ' ' + last_name}</h3>
			<p>{email}</p>
			</div>
			
		</div>
	)
}

export default User;