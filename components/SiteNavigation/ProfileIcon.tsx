interface IProfileIconProps {
	firstInitial: string;
	lastInitial: string;
}

function ProfileIcon({ firstInitial, lastInitial }: IProfileIconProps) {
	return (
		<div>
			<p>
				{firstInitial} {lastInitial}
			</p>
		</div>
	);
}

export default ProfileIcon;
