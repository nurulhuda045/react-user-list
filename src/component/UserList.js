import React, { useEffect, useState } from 'react'
import User from './User';
import Pagination from 'react-bootstrap/Pagination';
import { api_url } from '../api/api';


const UserList = () => {
	const [userList, setUserList] = useState(null)
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1);


	useEffect(() => {
		const getUserList = () => {
		fetch(`${api_url}?page=${currentPage}&per_page=5`).then((res) =>{
			return res.json()
		}).then((result) => {
			setUserList(result)
		}).catch((e) => console.log(e))
		.finally(() => {
			setLoading(false)
		})
		}
		getUserList()
	}, [currentPage])

	const pageChange = (page) => {
		if ( currentPage === page ) {
			return;
		}
		setCurrentPage(page)
	}

	return (
		<div>
			<h1>User List</h1>
			{
				loading ? 'Loading...' :
					<div  className="user-list">
						{
							userList.data.map((user) => {
								return <User key={user.id} {...user} />
							})
						}
						<Pagination>
							{
								Array.from(Array(userList.total_pages), (e, i) => (
									<Pagination.Item active={++i === currentPage} key={i} onClick={() => pageChange(i)}>{i}</Pagination.Item>
								))
							}
						</Pagination>
					</div>
			}
		</div>
	)
}

export default UserList;