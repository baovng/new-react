/*
Bai toan:
Chọn ảnh, xong hiển thị luôn ảnh ngay tại lúc đó 
Giải quyết:

mỗi khi chọn ảnh mới, url cũ vẫn nằm trong memory => memory leak
=> Khi chọn ảnh mới, xóa url cũ. 
=> Thì khi thay ảnh -> effect đổi trên avatar -> useEffect

- Have syntax : URL.createObjectURL(file) -> to create URL for object
-> syntax: URL.revokeObjectURL(file.preview) -> remove the URL 
*/

import { useState, useEffect } from 'react';

function ChangeAvatar() {
	const [avatar, setAvatar] = useState(false);

	useEffect(() => {
		//clean up
		return () => {
			avatar && URL.revokeObjectURL(avatar.preview); //check if they have the avatar -> avatar.preview property doesnt have yet -> error
		};
	}, [avatar]);
	const handleChange = (e) => {
		const file = e.target.files[0]; //file is an object
		console.log(file);
		console.log(URL.createObjectURL(file));

		//to set the showPicture, will assign a property for an object
		file.preview = URL.createObjectURL(file);
		setAvatar(file); //setAvatar has a file => boolean true
	};
	return (
		<div>
			<input type="file" onChange={handleChange} />
			{avatar && <img src={avatar.preview} alt="" width="80%" />}
		</div>
	);
}

export default ChangeAvatar;
