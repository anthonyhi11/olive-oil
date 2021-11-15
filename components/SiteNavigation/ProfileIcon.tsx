import styles from "../../styles/profileIcon.module.css";
import Link from "next/link";

interface IProfileIconProps {
	firstInitial: string;
	lastInitial: string;
}

function ProfileIcon({ firstInitial, lastInitial }: IProfileIconProps) {
	return (
		<Link href="/profile">
			<div className={styles.profileIcon}>
				{firstInitial}
				{lastInitial}
			</div>
		</Link>
	);
}

export default ProfileIcon;
